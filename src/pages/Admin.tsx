import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Plus, Eye, EyeOff, Save, LogOut, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  hasCoaching: boolean;
}

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [videos, setVideos] = useState<Video[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [showcaseImages, setShowcaseImages] = useState<GalleryImage[]>([]);
  const [testimonialImages, setTestimonialImages] = useState<GalleryImage[]>(
    [],
  );

  // NEW: Branding section single image control
  const [brandingImage, setBrandingImage] = useState("");

  const [heroVideoInput, setHeroVideoInput] = useState("");
  const [heroVideoEmbed, setHeroVideoEmbed] = useState("");

  const { toast } = useToast();

  const ADMIN_EMAIL = "ad@gmail.com";
  const ADMIN_PASSWORD = "12345678";
  const IMGBB_API_KEY = "b1d71820de8fb4fec128865d1a503c47";

  // ─────────────────────────────────────────────────────────────
  // Auth & Load data
  // ─────────────────────────────────────────────────────────────

  useEffect(() => {
    const isAuth = localStorage.getItem("dm-admin-auth");
    if (isAuth === "true") setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const savedVideos = localStorage.getItem("dm-videos");
      if (savedVideos) setVideos(JSON.parse(savedVideos));

      const savedProducts = localStorage.getItem("dm-products");
      if (savedProducts) setProducts(JSON.parse(savedProducts));

      const savedShowcase = localStorage.getItem("dm-showcase-images");
      if (savedShowcase) {
        setShowcaseImages(JSON.parse(savedShowcase));
      } else {
        setShowcaseImages([
          { id: "1", url: "", alt: "Showcase 1" },
          { id: "2", url: "", alt: "Showcase 2" },
          { id: "3", url: "", alt: "Showcase 3" },
        ]);
      }

      const savedTestimonials = localStorage.getItem("dm-testimonial-images");
      if (savedTestimonials)
        setTestimonialImages(JSON.parse(savedTestimonials));

      const savedBranding = localStorage.getItem("dm-branding-image");
      if (savedBranding) setBrandingImage(savedBranding);

      const savedVideo = localStorage.getItem("dm-hero-video-url");
      if (savedVideo) {
        setHeroVideoInput(savedVideo);
        setHeroVideoEmbed(convertToEmbed(savedVideo));
      }
    }
  }, [isAuthenticated]);

  // ─────────────────────────────────────────────────────────────
  // Convert YouTube link to embed
  // ─────────────────────────────────────────────────────────────

  const convertToEmbed = (url: string) => {
    if (!url) return "";
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    if (match && match[1]) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
  };

  // ─────────────────────────────────────────────────────────────
  // Improved ImgBB Upload: Supports single + MULTIPLE files (for Community Gallery)
  // ─────────────────────────────────────────────────────────────

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<any>>,
    index?: number,
    isBranding = false,
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    toast({ title: `Uploading ${files.length} image(s) to ImgBB...` });

    const newUrls = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
          { method: "POST", body: formData },
        );

        const data = await response.json();

        if (data.success) {
          const imageUrl = data.data.url;
          newUrls.push(imageUrl);
        } else {
          toast({
            title: `Failed to upload ${file.name}`,
            variant: "destructive",
          });
        }
      } catch (err) {
        console.error("Upload error:", err);
        toast({
          title: `Error uploading ${file.name}`,
          variant: "destructive",
        });
      }
    }

    if (newUrls.length > 0) {
      if (isBranding) {
        // Branding: only keep the last uploaded (single image)
        const latestUrl = newUrls[newUrls.length - 1];
        setter(latestUrl);
        localStorage.setItem("dm-branding-image", latestUrl);
        toast({ title: "Branding image updated & saved!" });
      } else if (typeof index === "number") {
        // Showcase: fixed slots — replace one
        setter((prev) => {
          const copy = [...prev];
          copy[index] = { ...copy[index], url: newUrls[0] };
          localStorage.setItem("dm-showcase-images", JSON.stringify(copy));
          return copy;
        });
        toast({ title: "Showcase image updated & saved!" });
      } else {
        // Community Gallery: add multiple images
        setter((prev) => {
          const newList = [
            ...prev,
            ...newUrls.map((url, i) => ({
              id: Date.now().toString() + i,
              url,
              alt: `Uploaded ${prev.length + i + 1}`,
            })),
          ];
          localStorage.setItem(
            "dm-testimonial-images",
            JSON.stringify(newList),
          );
          return newList;
        });
        toast({
          title: `${newUrls.length} image(s) added & saved to Community Gallery!`,
        });
      }
    }
  };

  const removeTestimonial = (id: string) => {
    setTestimonialImages((prev) => {
      const updated = prev.filter((img) => img.id !== id);
      localStorage.setItem("dm-testimonial-images", JSON.stringify(updated));
      return updated;
    });
  };

  // ─────────────────────────────────────────────────────────────
  // Login / Logout
  // ─────────────────────────────────────────────────────────────

  const handleLogin = () => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("dm-admin-auth", "true");
      toast({ title: "Login successful!" });
    } else {
      toast({ title: "Invalid credentials", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("dm-admin-auth");
    setEmail("");
    setPassword("");
    toast({ title: "Logged out" });
  };

  // ─────────────────────────────────────────────────────────────
  // Save functions (optional backup)
  // ─────────────────────────────────────────────────────────────

  const saveShowcase = () => {
    localStorage.setItem("dm-showcase-images", JSON.stringify(showcaseImages));
    toast({ title: "Showcase saved manually" });
  };

  const saveTestimonials = () => {
    localStorage.setItem(
      "dm-testimonial-images",
      JSON.stringify(testimonialImages),
    );
    toast({ title: "Community Gallery saved manually" });
  };

  const saveHeroVideo = () => {
    const embed = convertToEmbed(heroVideoInput);
    if (embed) {
      localStorage.setItem("dm-hero-video-url", embed);
      toast({ title: "Video saved" });
    } else {
      toast({ title: "Invalid link", variant: "destructive" });
    }
  };

  // ─────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif text-gold">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="Enter password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
            </div>
            <Button
              onClick={handleLogin}
              className="w-full bg-gold text-background hover:bg-gold/90"
            >
              Login
            </Button>
            <div className="text-center">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-gold"
              >
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gold">
            Admin Panel
          </h1>
          <div className="flex gap-3">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="mr-2 h-4 w-4" /> View Site
              </Button>
            </Link>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>

        <Tabs defaultValue="offers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="offers">Gallery</TabsTrigger>
            <TabsTrigger value="hero">Hero Video</TabsTrigger>
          </TabsList>

          {/* Gallery Tab */}
          <TabsContent value="offers" className="space-y-10">
            {/* Branding Section Image */}
            <Card>
              <CardHeader>
                <CardTitle>Branding Section Image (Big Right Photo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Upload / Change Image</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageUpload(e, setBrandingImage, undefined, true)
                    }
                  />
                  <p className="text-sm text-muted-foreground">
                    This updates the large image on the right in Branding
                    section
                  </p>
                </div>

                {brandingImage && (
                  <div className="mt-4 border rounded overflow-hidden max-w-md mx-auto">
                    <img
                      src={brandingImage}
                      alt="Branding preview"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}

                <Button
                  onClick={() => {
                    if (brandingImage) {
                      localStorage.setItem("dm-branding-image", brandingImage);
                      toast({ title: "Branding image saved" });
                    }
                  }}
                  className="bg-gold hover:bg-gold/90"
                >
                  <Save className="mr-2 h-4 w-4" /> Save (auto-saved)
                </Button>
              </CardContent>
            </Card>

            {/* Showcase */}
            <Card>
              <CardHeader>
                <CardTitle>Day One Planner Showcase (3 images)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {showcaseImages.map((img, idx) => (
                    <div key={img.id} className="space-y-3">
                      <Label>Image {idx + 1}</Label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageUpload(e, setShowcaseImages, idx)
                        }
                      />
                      {img.url && (
                        <img
                          src={img.url}
                          alt={img.alt}
                          className="w-full h-48 object-cover rounded border"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button onClick={saveShowcase} className="bg-gold">
                    <Save className="mr-2 h-4 w-4" /> Save Showcase
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community Gallery – now supports multiple upload */}
            <Card>
              <CardHeader>
                <CardTitle>Community Gallery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple // ← This allows selecting many images at once
                    onChange={(e) => handleImageUpload(e, setTestimonialImages)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Select one or many images at once
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {testimonialImages.map((img) => (
                    <div key={img.id} className="relative group">
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full aspect-square object-cover rounded-lg border"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                        onClick={() => removeTestimonial(img.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Button onClick={saveTestimonials} className="bg-gold">
                  <Save className="mr-2 h-4 w-4" /> Save Gallery (optional)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hero Video */}
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Change Hero YouTube Video</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Paste YouTube Link</Label>
                  <Input
                    value={heroVideoInput}
                    onChange={(e) => {
                      setHeroVideoInput(e.target.value);
                      setHeroVideoEmbed(convertToEmbed(e.target.value));
                    }}
                    placeholder="https://youtu.be/XXXXX or watch?v=XXXXX"
                  />
                  <p className="text-sm text-muted-foreground">
                    Normal share link is fine — we convert it automatically
                  </p>
                </div>

                {heroVideoEmbed && (
                  <div className="border rounded overflow-hidden aspect-video max-w-2xl mx-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={heroVideoEmbed}
                      title="Preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                <Button
                  onClick={saveHeroVideo}
                  className="bg-gold hover:bg-gold/90"
                >
                  <Save className="mr-2 h-4 w-4" /> Save Video Link
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
