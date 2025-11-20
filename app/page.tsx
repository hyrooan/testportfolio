import Image from 'next/image';

export default function Home() {
	return (
		<div className="min-h-screen py-8 px-4" style={{
			background: '#1a1d2e',
			color: '#e0e0e0'
		}}>
			<div className="w-full max-w-5xl mx-auto space-y-6">

				{/* Profile Section - 왼쪽 프로필 + 오른쪽 정보 */}
				<section className="grid md:grid-cols-[200px_1fr] gap-8">
					{/* 왼쪽: 프로필 사진 */}
					<div className="flex justify-center md:justify-start">
						<div className="w-40 h-40 rounded-full overflow-hidden" style={{
							border: '4px solid #6c5ce7',
							boxShadow: '0 0 30px rgba(108, 92, 231, 0.5)'
						}}>
							<Image
								src="/profile.jpg"
								alt="Profile"
								width={500}
								height={500}
								className="w-full h-full object-cover"
								priority
								quality={85}
							/>
						</div>
					</div>

					{/* 오른쪽: 프로필 정보 */}
					<div className="space-y-4">
						{/* I AM */}
						<div>
							<h2 className="text-xs font-semibold mb-1" style={{ color: '#a29bfe' }}>_I AM</h2>
							<p className="text-sm" style={{ color: '#e0e0e0' }}>이름 : 이프로</p>
							<p className="text-xs mt-0.5" style={{ color: '#b0b0b0' }}>포지션: PM 서비스 기획 / FE Developer(jr)</p>
						</div>

						{/* Contact */}
						<div style={{ borderTop: '1px solid #2d3748', paddingTop: '1rem' }}>
							<h2 className="text-xs font-semibold mb-2" style={{ color: '#a29bfe' }}>_Contact</h2>
							<div className="space-y-0.5">
								<p className="text-xs" style={{ color: '#b0b0b0' }}>Email : leepro@naver.com</p>
								<p className="text-xs" style={{ color: '#b0b0b0' }}>Phone : +082 - 1234-5678</p>
							</div>
						</div>

						{/* Channel */}
						<div style={{ borderTop: '1px solid #2d3748', paddingTop: '1rem' }}>
							<h2 className="text-xs font-semibold mb-2" style={{ color: '#a29bfe' }}>_Channel</h2>
							<div className="space-y-1.5">
								<div className="flex items-center gap-3">
									<span className="text-xs w-14" style={{ color: '#b0b0b0' }}>SNS :</span>
									<input
										type="text"
										readOnly
										className="flex-1 px-3 py-2 rounded text-sm"
										style={{
											background: '#2d3748',
											border: '1px solid #4a5568',
											color: '#a0aec0',
											outline: 'none'
										}}
										placeholder="링크를 입력해주세요"
									/>
								</div>
								<div className="flex items-center gap-3">
									<span className="text-xs w-14" style={{ color: '#b0b0b0' }}>GitHub :</span>
									<input
										type="text"
										readOnly
										className="flex-1 px-3 py-2 rounded text-sm"
										style={{
											background: '#2d3748',
											border: '1px solid #4a5568',
											color: '#a0aec0',
											outline: 'none'
										}}
										placeholder="링크를 입력해주세요"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Introduce Section */}
				<section style={{
					borderTop: '1px solid #2d3748',
					paddingTop: '1.5rem'
				}}>
					<h2 className="text-sm font-semibold mb-3" style={{ color: '#a29bfe' }}>Introduce</h2>
					<div className="p-3 rounded-lg" style={{
						background: '#2d3748',
						border: '1px solid #4a5568'
					}}>
						<p className="text-xs leading-relaxed" style={{ color: '#cbd5e0', lineHeight: '1.6' }}>
							간단한 자기소개 및 인삿말
						</p>
					</div>
				</section>

				{/* Tech Skill Section */}
				<section style={{
					borderTop: '1px solid #2d3748',
					paddingTop: '1.5rem'
				}}>
					<h2 className="text-sm font-semibold mb-3" style={{ color: '#a29bfe' }}>Tech Skill</h2>
					<div className="flex flex-wrap gap-2">
						{[
							{ name: 'JS', color: '#f7df1e' },
							{ name: 'TS', color: '#3178c6' },
							{ name: 'React', color: '#61dafb' },
							{ name: 'Tailwindcss', color: '#06b6d4' },
							{ name: 'Premierepro', color: '#9999ff' }
						].map((skill) => (
							<span
								key={skill.name}
								className="px-5 py-2 rounded-full text-xs font-semibold transition-transform hover:scale-105"
								style={{
									background: skill.color,
									color: '#1a1d2e',
									cursor: 'pointer'
								}}
							>
								{skill.name}
							</span>
						))}
					</div>
				</section>

			</div>
		</div>
	);
}
