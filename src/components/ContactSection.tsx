import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact from Daily Momentum Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `${formData.address ? `Address: ${formData.address}\n` : ""}` +
        `${formData.phone ? `Phone: ${formData.phone}\n` : ""}` +
        `\nMessage:\n${formData.message}`
    );

    // Opens Gmail in a new tab with pre-filled email
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=its.me.yidi@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");

    // Optional: clear form after opening
    setFormData({
      name: "",
      address: "",
      phone: "",
      message: "",
    });

    toast({
      title: "Opening Gmail...",
      description: "A new tab has opened with your message ready to send.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section-padding bg-[#ebebeb]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content - Left */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#E8C547]">
              CONTACT US
            </h2>
            <p className="text-lg md:text-xl text-[#5d222a]/90 leading-relaxed">
              Whether you’re looking for coaching, collaboration, or creative
              strategy — I’d love to hear from you.
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#5d222a]">
              Let’s create something powerful together.
            </p>
          </div>

          {/* Contact Form Card - Right */}
          <div className="max-w-lg mx-auto lg:mx-0">
            <div className="bg-white/50 border border-[#5d222a]/20 rounded-2xl p-8 md:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-[#5d222a]/30 focus:border-[#5d222a] focus:ring-[#5d222a]"
                />

                <Input
                  type="text"
                  name="address"
                  placeholder="Address (optional)"
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-white border-[#5d222a]/30 focus:border-[#5d222a] focus:ring-[#5d222a]"
                />

                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white border-[#5d222a]/30 focus:border-[#5d222a] focus:ring-[#5d222a]"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white border-[#5d222a]/30 focus:border-[#5d222a] focus:ring-[#5d222a] resize-none"
                />

                <Button
                  type="submit"
                  className="w-full bg-[#5d222a] hover:bg-[#4a1a22] text-white text-lg py-6"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
