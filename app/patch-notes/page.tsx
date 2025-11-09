"use client";
import { FloatingParticles } from "@/components/FloatingParticles";
import Link from "next/link";
import React, { useEffect } from "react";

export default function GameOverviewPage() {
	useEffect(() => {
		document.body.style.overflow = "auto";
		document.documentElement.style.overflow = "auto";

		return () => {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		};
	}, []);

	return (
		<div
			className="min-h-dvh relative bg-gradient-to-br from-gray-900 via-gray-800 to-black"
			style={{
				overflow: "auto",
				height: "auto",
			}}
		>
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
				<div className="absolute top-0 left-0 w-full h-full opacity-20">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
				</div>
				<div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
				<FloatingParticles />
			</div>

			{/* Page Content */}
			<div className="relative z-10 p-4 py-10">
				<div className="max-w-4xl mx-auto text-center">
					{/* Header */}
					<h1 className="text-5xl font-bold font-pixel text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-blue-600 mb-6">
						MYSTIC REALM DEFENDER
					</h1>
					<p className="text-gray-300 font-mono text-lg mb-6">
						A Magical Survival Game built by students of{" "}
						<span className="text-purple-400">
							ABV-IIITM Gwalior
						</span>
					</p>

					{/* Story Section */}
					<div className="bg-black/50 border border-purple-500/30 rounded-lg p-8 mb-10">
						<h2 className="text-3xl font-bold text-purple-400 font-pixel mb-3">
							💭 THE ORIGIN STORY
						</h2>
						<p className="text-gray-300 font-mono text-sm leading-relaxed max-w-2xl mx-auto">
							This project was born in <span className="text-purple-400 font-bold">November 2025</span>, 
							when <span className="text-white font-bold">Rohit Mishra</span>, 
							a passionate Harry Potter fan, envisioned creating a game 
							that brought spellcasting, magic, and fantasy battles to life.
							Inspired by the magical duels of Hogwarts and the thrill of survival games,
							he collaborated with <span className="text-white font-bold">Md Rezaul</span> and{" "}
							<span className="text-white font-bold">Saurav Bhosdiwala</span> to bring 
							<em className="text-purple-300"> Mystic Realm Defender </em> into existence — 
							a game where strategy, spells, and survival merge into one.
						</p>
					</div>

					{/* Features Section */}
					<div className="bg-black/50 border border-purple-500/30 rounded-lg p-8 mb-10">
						<h2 className="text-3xl font-bold text-purple-400 font-pixel mb-4">
							⚙️ GAME FEATURES
						</h2>
						<ul className="text-gray-300 font-mono text-sm space-y-3 text-left max-w-2xl mx-auto">
							<li>🧙‍♂️ Play as a wizard and cast powerful spells using mana energy.</li>
							<li>💥 Fight off waves of mythological creatures and magical bosses.</li>
							<li>🔮 Collect crystals dropped by enemies to upgrade your spells.</li>
							<li>🌌 Explore dynamic battlefield maps that evolve as you progress.</li>
							<li>🧭 Experience a real-world inspired IIITM Gwalior campus layout integrated into the map system.</li>
							<li>🎮 Smooth controls — WASD for movement and mouse-based spellcasting.</li>
							<li>🛡️ Upgrade your abilities and unlock multi-cast combos.</li>
							<li>💾 Automatic save and progress tracking for continuous gameplay.</li>
							<li>🎵 Magical sound effects and immersive atmosphere inspired by fantasy worlds.</li>
						</ul>
					</div>

					{/* Tech Stack Section */}
					<div className="bg-black/50 border border-purple-500/30 rounded-lg p-8 mb-10">
						<h2 className="text-3xl font-bold text-purple-400 font-pixel mb-4">
							💻 TECHNOLOGY STACK
						</h2>
						<ul className="text-gray-300 font-mono text-sm space-y-3 text-left max-w-2xl mx-auto">
							<li>⚡ Framework: Next.js 14</li>
							<li>💡 Language: TypeScript</li>
							<li>🎨 Styling: Tailwind CSS</li>
							<li>🧱 Rendering Engine: HTML5 Canvas API</li>
							<li>🧠 Backend & Auth: Supabase</li>
							<li>🚀 Deployment: Vercel</li>
						</ul>
					</div>

					{/* Team Section */}
					<div className="bg-black/50 border border-purple-500/30 rounded-lg p-8 mb-10">
						<h2 className="text-3xl font-bold text-purple-400 font-pixel mb-4">
							👨‍💻 DEVELOPMENT TEAM
						</h2>
						<ul className="text-gray-300 font-mono text-sm space-y-3 text-left max-w-2xl mx-auto">
							<li>🪄 <span className="text-white font-bold">Rohit Mishra (2023-BCS-056)</span> — Project Lead & Full Stack Developer</li>
							<li>⚙️ <span className="text-white font-bold">Md Rezaul (2023-BCS-035)</span> — Backend Developer</li>
							<li>🎨 <span className="text-white font-bold">Saurav Bhosdiwala (2023-BCS-069)</span> — Frontend Developer</li>
						</ul>
					</div>

					{/* Footer Message */}
					<div className="text-center bg-black/40 border border-purple-500/20 rounded-lg p-6">
						<p className="text-gray-300 font-mono mb-3">
							🧠 Built with curiosity, magic, and teamwork at ABV-IIITM Gwalior.
						</p>
						<p className="text-gray-400 font-mono text-xs">
							“Magic isn’t about wands — it’s about creation.” ✨
						</p>
					</div>

					{/* Back Button */}
					<div className="flex justify-center mt-10">
						<Link
							href="/"
							className="px-8 py-4 bg-purple-600/80 hover:bg-purple-600 border border-purple-500/50 text-white font-mono font-bold rounded-lg text-xl transition-all duration-200 transform hover:scale-105 hover:border-purple-500"
						>
							BACK TO HOME
						</Link>
					</div>
				</div>
			</div>

			{/* Corner Decorations */}
			<div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-purple-500/30" />
			<div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-500/30" />
			<div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-purple-500/30" />
			<div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-500/30" />
		</div>
	);
}
