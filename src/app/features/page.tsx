import Image from "next/image";

export default function Features() {
    return (
        <div>
            <h1 className="mb-4">Features</h1>
            <h2 className="mb-2">博客功能简介</h2>
            <h3 className="text-lg font-bold mb-1">Navigation 导航栏</h3>
            <ul className="list-disc pl-5">
                <li className="list-disc pl-2">自动隐藏</li>
                <li className="list-disc pl-2">磨玻璃效果</li>
            </ul>
            <Image src="/gif/navbar.gif" alt="Navigation" width={1000} height={1000} className="mt-10"/>
        </div>
    )
};

