'use client';

import React, { useState } from 'react';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { FiSend } from 'react-icons/fi';
import { Typography, Form, Input, Card, Button, message } from 'antd';
import axios from 'axios';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export default function Contact() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (values) => {
        setLoading(true);
        
        try {
            console.log('Submitting form with values:', values);
            
            // Format data for Airtable API
            const airtableData = {
                records: [
                    {
                        fields: {
                            Name: values.name,
                            Email: values.email,
                            Requirment: values.project // Using the same field name from your curl example
                        }
                    }
                ]
            };
            
            // Direct API call to Airtable using axios
            const response = await axios({
                method: 'POST',
                url: 'https://api.airtable.com/v0/appR7dAci83Vf3qLH/Employer',
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: airtableData
            });
            
            console.log('Airtable response:', response.data);
            
            // Success
            message.success('Message sent successfully!');
            form.resetFields();
            
        } catch (error) {
            console.error('Error submitting to Airtable:', error);
            message.error(`Failed to send message: ${error.response?.data?.error || error.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="mx-64 mt-8 font-sans min-h-screen">
            <div className="text-center mb-8">
                <Title level={1} className="mb-0">Contact Me</Title>
                <Paragraph className="mt-2.5">Get in Touch</Paragraph>
            </div>
            
            <div className="flex justify-between">
                {/* Left Section - Contact Info */}
                <div className="w-2/5">
                    <div className="text-center mb-6">
                        <Title level={3}>Talk to me</Title>
                    </div>
                    
                    <div className="space-y-4">
                        <Card className="rounded-lg shadow-md text-center py-4 px-4">
                            <MdOutlineMarkEmailUnread className="text-3xl mx-auto" />
                            <Text strong className="block mt-1.5">Email</Text>
                            <Text type="secondary" className="block">mdmaazahmad120@gmail.com</Text>
                            <Text type="secondary" className="flex items-center justify-center mt-2 cursor-pointer">
                                Write me <AiOutlineArrowRight className="ml-1 text-sm" />
                            </Text>
                        </Card>
                        
                        <Card className="rounded-lg shadow-md text-center py-4 px-4">
                            <BsWhatsapp className="text-3xl mx-auto" />
                            <Text strong className="block mt-1.5">Whatsapp</Text>
                            <Text type="secondary" className="block">+91 8102162627</Text>
                            <Text type="secondary" className="flex items-center justify-center mt-2 cursor-pointer">
                                Write me <AiOutlineArrowRight className="ml-1 text-sm" />
                            </Text>
                        </Card>
                        
                        <Card className="rounded-lg shadow-md text-center py-4 px-4">
                            <BsMessenger className="text-3xl mx-auto" />
                            <Text strong className="block mt-1.5">Messenger</Text>
                            <Text type="secondary" className="block">mdmaaz.ahmad.98</Text>
                            <Text type="secondary" className="flex items-center justify-center mt-2 cursor-pointer">
                                Write me <AiOutlineArrowRight className="ml-1 text-sm" />
                            </Text>
                        </Card>
                    </div>
                </div>
                
                {/* Right Section - Contact Form */}
                <div className="w-1/2">
                    <div className="text-center mb-6">
                        <Title level={3}>Write me your project</Title>
                    </div>
                    
                    <div className="p-4">
                        <Form 
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                        >
                            <Form.Item 
                                name="name"
                                label="Name:" 
                                className="mb-4"
                                rules={[{ required: true, message: 'Please enter your name' }]}
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
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' }
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
                                rules={[{ required: true, message: 'Please describe your project requirements' }]}
                                help="List technologies needed (e.g., react.js, next.js)"
                            >
                                <TextArea 
                                    placeholder="Write Your Project Requirements" 
                                    rows={5} 
                                    className="rounded-lg py-2 text-gray-800"
                                />
                            </Form.Item>
                            
                            <div className="pl-2">
                                <Button 
                                    type="primary" 
                                    htmlType="submit"
                                    loading={loading}
                                    className="flex items-center justify-center rounded-full py-6 px-8 bg-gray-900 hover:bg-black text-base"
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