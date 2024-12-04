"use client";
import { ChangeEvent, FormEvent, useState } from 'react';

const myEmail = process.env.MY_EMAIL;

export default function EmailSend() {
    const [formData, setFormData] = useState({
        from: '',
        to: myEmail,
        subject: '',
        text: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log('Sending form data:', formData); // 打印发送的数据
    
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            // 获取响应的具体内容
            const data = await response.json();
            console.log('Response data:', data);
    
            if (response.ok) {
                alert('Email sent successfully');
            } else {
                console.error("Error details:", {
                    status: response.status,
                    statusText: response.statusText,
                    data: data
                });
                alert(`Failed to send email: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error("Request failed:", error);
            alert('Failed to send email: ' + (error instanceof Error ? error.message : 'Unknown error'));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="from"
                placeholder="From"
                value={formData.from}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <textarea
                name="text"
                placeholder="Message"
                value={formData.text}
                onChange={handleChange}
                required
            />
            <button type="submit">Send Email</button>
        </form>
    );
}