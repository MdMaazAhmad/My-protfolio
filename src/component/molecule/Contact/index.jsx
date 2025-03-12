"use client";

import React, { useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { Typography, Form, Input, Card, Button } from "antd";
import axios from "axios";
import {toast} from "react-toastify"

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const airtableData = {
        records: [
          {
            fields: {
              Name: values.name,
              Email: values.email,
              Requirment: values.project,
            },
          },
        ],
      };

      await axios({
        method: "POST",
        url: "https://api.airtable.com/v0/appR7dAci83Vf3qLH/Employer",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        data: airtableData,
      });

      // Success
      toast.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      console.error("Error submitting to Airtable:", error);
      toast.error(
        `Failed to send message: ${
          error.response?.data?.error || error.message
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-64 mt-8 font-sans min-h-screen py-8"
      id="contact"
    >
      <div className="text-center mb-8">
        <Title level={1} className="mb-0 text-2xl sm:text-3xl md:text-4xl">
          Contact Me
        </Title>
        <Paragraph className="mt-2.5 2text-xl md:text-lg">
          Get in Touch
        </Paragraph>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-2/5">
          <div className="text-center mb-6">
            <Title level={3} className="text-xl sm:text-2xl">
              Talk to me
            </Title>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
            <Card className="rounded-lg shadow-md text-center py-4 px-4 hover:shadow-lg transition-shadow duration-300">
              <MdOutlineMarkEmailUnread className="text-2xl md:text-3xl mx-auto" />
              <Text strong className="block mt-1.5">
                Email
              </Text>
              <Text type="secondary" className="block text-sm break-all">
                mdmaazahmad120@gmail.com
              </Text>
              <a href="mailto:mdmaazahmad120@gmail.com" className="block">
                <Text
                  type="secondary"
                  className="flex items-center justify-center mt-2 cursor-pointer hover:text-black transition-colors duration-300"
                >
                  Write me <AiOutlineArrowRight className="ml-1 text-sm" />
                </Text>
              </a>
            </Card>

            <Card className="rounded-lg shadow-md text-center py-4 px-4 hover:shadow-lg transition-shadow duration-300">
              <BsWhatsapp className="text-2xl md:text-3xl mx-auto" />
              <Text strong className="block mt-1.5">
                Whatsapp
              </Text>
              <Text type="secondary" className="block text-sm">
                +91 8102162627
              </Text>
              <a
                href="https://wa.me/918102162627"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Text
                  type="secondary"
                  className="flex items-center justify-center mt-2 cursor-pointer hover:text-black transition-colors duration-300"
                >
                  Write me <AiOutlineArrowRight className="ml-1 text-sm" />
                </Text>
              </a>
            </Card>

            <Card className="rounded-lg shadow-md text-center py-4 px-4 hover:shadow-lg transition-shadow duration-300">
              <BsMessenger className="text-2xl md:text-3xl mx-auto" />
              <Text strong className="block mt-1.5">
                Messenger
              </Text>
              <Text type="secondary" className="block text-sm">
                mdmaaz.ahmad.98
              </Text>
              <a
                href="https://m.me/mdmaaz.ahmad.98"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Text
                  type="secondary"
                  className="flex items-center justify-center mt-2 cursor-pointer hover:text-black transition-colors duration-300"
                >
                  Write me <AiOutlineArrowRight className="ml-1 text-sm" />
                </Text>
              </a>
            </Card>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="text-center mb-6">
            <Title level={3} className="text-xl sm:text-2xl">
              Write me 
            </Title>
          </div>

          <div className="p-2 sm:p-4">
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                name="name"
                label="Name:"
                className="mb-4"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  placeholder="Insert Your Name"
                  className="rounded-lg py-2 text-gray-800"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email:"
                className="mb-4"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  placeholder="Insert Your Email"
                  className="rounded-lg py-2 text-gray-800"
                />
              </Form.Item>

              <Form.Item
                name="project"
                label="Project Requirements:"
                className="mb-6"
                rules={[
                  {
                    required: true,
                    message: "Please describe your project requirements",
                  },
                ]}
                help="List technologies needed (e.g., react.js, next.js)"
              >
                <TextArea
                  placeholder="Write Your Project Requirements"
                  rows={5}
                  className="rounded-lg py-2 text-gray-800"
                />
              </Form.Item>

              <div className="flex justify-center sm:justify-start pl-0 sm:pl-2">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="flex items-center justify-center rounded-full py-4 sm:py-6 px-6 sm:px-8 bg-gray-900 hover:bg-black text-sm sm:text-base"
                >
                  <span>Send Message</span>
                  {!loading && <FiSend className="ml-2" />}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
