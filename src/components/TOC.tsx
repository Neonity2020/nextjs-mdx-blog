'use client'

import React, { useEffect, useState } from 'react';

interface Heading {
    id: string;
    text: string;
    level: string;
}

const TOC: React.FC = () => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll('h2, h3'));
        const headingsData: Heading[] = headingElements.map((heading) => ({
            id: heading.id,
            text: (heading as HTMLElement).innerText, // 强制转换为 HTMLElement
            level: heading.tagName.toLowerCase(),
        }));
        setHeadings(headingsData);
    }, []);

    return (
        <div>
            <span className="text-3xl font-bold mt-4 mb-4">Contents</span>
            
            <ul className="list-disc pl-5"> {/* 添加项目符号样式 */}
                {headings.map((heading) => (
                    <li key={heading.id} style={{ marginLeft: heading.level === 'h2' ? '20px' : '40px' }}>
                        <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TOC;
