import React from 'react';

const HomelabDiagram: React.FC = () => {
  return (
      <><div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-4">
          <div className="flex flex-col gap-2.5">
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900 overflow-hidden">
                  <div className="flex items-center gap-2 p-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></div>
                      External Access
                  </div>
                  <div className="p-2.5 flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 p-1.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <span>🌐</span>
                          <div>
                              <div className="text-xs font-semibold text-slate-900 dark:text-white">Internet (ISP)</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">Home broadband · Site A</div>
                          </div>
                      </div>
                      <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between gap-2 px-3 py-1 rounded-md bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.3)] text-[#f97316] text-xs font-semibold">
                              <span>☁️ Cloudflare Tunnel</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-3 py-1 rounded-md bg-[rgba(57,208,216,0.12)] border border-[rgba(57,208,216,0.3)] text-[#39d0d8] text-xs font-semibold">
                              <span>🔒 Tailscale VPN mesh</span>
                              <span className="bg-[rgba(57,208,216,0.12)] text-[#39d0d8] border border-[rgba(57,208,216,0.3)] px-1.5 py-0.5 rounded font-bold">WireGuard</span>
                          </div>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-800 pt-1 mt-1">
                          <div className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed">
                              No ports open on router<br />
                              All remote access via Tailscale<br />
                          </div>
                      </div>
                  </div>
              </div>

              <div className="border border-[rgba(249,115,22,0.3)] rounded-lg bg-[rgba(249,115,22,0.1)] overflow-hidden">
                  <div className="bg-[rgba(249,115,22,0.12)] border-b border-[rgba(249,115,22,0.3)] p-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></div>
                      <div className="text-sm font-bold text-[#f97316]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Site B</div>
                      <span className="ml-auto rounded px-2 py-0.5 border border-[rgba(57,208,216,0.3)] bg-[rgba(57,208,216,0.12)] text-[#39d0d8] text-[0.65rem] font-bold">
                          exit node
                      </span>
                  </div>
                  <div className="p-2.5 flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 p-1.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <span>💻</span>
                          <div>
                              <div className="text-xs font-semibold text-slate-900 dark:text-white">Repurposed Laptop</div>
                              <div className="text-xs text-slate-500 dark:text-slate-300">Ubuntu · Tailscale node</div>
                          </div>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-800 pt-1 mt-1">
                          <div className="text-xs text-slate-500 dark:text-slate-300">Role:</div>
                          <div className="mt-1 space-y-1">
                              <div className="rounded-md border border-[rgba(249,115,22,0.3)] bg-[rgba(249,115,22,0.1)] px-2 py-1 text-[0.75rem] font-semibold text-[#f97316]">📡 Subnet router for Site B LAN</div>
                              <div className="rounded-md border border-[rgba(249,115,22,0.3)] bg-[rgba(249,115,22,0.1)] px-2 py-1 text-[0.75rem] font-semibold text-[#f97316]">🚪 Tailscale exit node</div>
                              <div className="rounded-md border border-[rgba(249,115,22,0.3)] bg-[rgba(249,115,22,0.1)] px-2 py-1 text-[0.75rem] font-semibold text-[#f97316]">📺 Jellyfin access for local TV</div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900 overflow-hidden">
                  <div className="flex items-center gap-2 p-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e3b341]"></div>
                      Storage
                  </div>
                  <div className="p-2.5 flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 p-1.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <span className="text-base">💾</span>
                          <div className="flex-1">
                              <div className="text-xs font-semibold text-slate-900 dark:text-white">TerraMaster DAS</div>
                          </div>
                          <div className="rounded px-1.5 py-0.5 text-[0.65rem] font-bold text-[#e3b341] border border-[rgba(227,179,65,0.3)] bg-[rgba(227,179,65,0.1)]">RAID1</div>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <span className="text-base">⚡</span>
                          <div className="flex-1">
                              <div className="text-xs font-semibold text-slate-900 dark:text-white">Internal NVMe</div>
                          </div>
                          <div className="rounded px-1.5 py-0.5 text-[0.65rem] font-bold text-[#39d0d8] border border-[rgba(57,208,216,0.3)] bg-[rgba(57,208,216,0.12)]">SYS</div>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <span className="text-base">🔌</span>
                          <div className="flex-1">
                              <div className="text-xs font-semibold text-slate-900 dark:text-white">USB External 1TB</div>
                          </div>
                          <div className="rounded px-1.5 py-0.5 text-[0.65rem] font-bold text-[#3fb950] border border-[rgba(63,185,80,0.3)] bg-[rgba(63,185,80,0.1)]">BCK</div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="flex flex-col gap-2.5">
              <div className="border border-[rgba(57,208,216,0.3)] rounded-xl bg-gradient-to-br from-[rgba(57,208,216,0.03)] to-transparent overflow-hidden">
                  <div className="bg-[rgba(57,208,216,0.08)] border-b border-[rgba(57,208,216,0.3)] p-2.5 flex items-center gap-2.5">
                      <div>
                          <div className="text-lg font-bold text-[#39d0d8] leading-none" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                              Mini PC Host — Site A (Primary)
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed mt-1">
                              Ubuntu 24.04 LTS · Docker · Portainer · Tailscale exit node<br />
                              Dual NIC: LAN Site A + subnet router for Site B · Always-on homelab server
                          </div>
                      </div>
                  </div>
                  <div className="p-3">
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                          <div className="border border-[rgba(249,115,22,0.3)] rounded-md bg-slate-50 dark:bg-slate-900 overflow-hidden">
                              <div className="p-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 bg-[rgba(249,115,22,0.08)] text-[#f97316] flex items-center gap-2">
                                  <span>▶</span> Media Acquisition
                              </div>
                              <div className="p-2 space-y-1">
                                  <div className="flex items-center gap-2 text-xs"><span className="text-red-400">🔒</span><span className="font-semibold text-red-300">gluetun</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">VPN gateway</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>⬇️</span><span className="font-semibold text-slate-900 dark:text-white">qbittorrent</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">via VPN</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>📺</span><span className="font-semibold text-slate-900 dark:text-white">sonarr</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">TV shows</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🎬</span><span className="font-semibold text-slate-900 dark:text-white">radarr</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">movies</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🎵</span><span className="font-semibold text-slate-900 dark:text-white">lidarr</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">music</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>💬</span><span className="font-semibold text-slate-900 dark:text-white">bazarr</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">subtitles</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🔍</span><span className="font-semibold text-slate-900 dark:text-white">prowlarr</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">indexer</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>☁️</span><span className="font-semibold text-slate-900 dark:text-white">flaresolverr</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">cf bypass</span></div>
                              </div>
                          </div>

                          <div className="border border-[rgba(88,166,255,0.3)] rounded-md bg-slate-50 dark:bg-slate-900 overflow-hidden">
                              <div className="p-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 bg-[rgba(88,166,255,0.08)] text-[#58a6ff] flex items-center gap-2">
                                  <span>🎞</span> Media Server / Music
                              </div>
                              <div className="p-2 space-y-1">
                                  <div className="flex items-center gap-2 text-xs"><span>🎞️</span><span className="font-semibold text-[#7dd3fc]">jellyfin</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">streaming</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🎶</span><span className="font-semibold text-slate-900 dark:text-white">navidrome</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">music</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🔄</span><span className="font-semibold text-slate-900 dark:text-white">slskd</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">soulseek</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🎯</span><span className="font-semibold text-slate-900 dark:text-white">soularr</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">automation</span></div>
                                  <div className="hidden lg:block border-t border-slate-200 dark:border-slate-800 pt-2 text-slate-500 dark:text-slate-300 text-[0.75rem] leading-relaxed">
                                      Jellyfin bridged across<br />two Docker networks.<br />Site B streams via Tailscale.
                                  </div>
                              </div>
                          </div>

                          <div className="border border-[rgba(57,208,216,0.3)] rounded-md bg-slate-50 dark:bg-slate-900 overflow-hidden">
                              <div className="p-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 bg-[rgba(57,208,216,0.08)] text-[#39d0d8] flex items-center gap-2">
                                  <span>🏠</span> Home Automation
                              </div>
                              <div className="p-2 space-y-1">
                                  <div className="flex items-center gap-2 text-xs"><span>🏠</span><span className="font-semibold text-slate-900 dark:text-white">homeassistant</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">core</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>📨</span><span className="font-semibold text-slate-900 dark:text-white">mosquitto</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">MQTT</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>❄️</span><span className="font-semibold text-slate-900 dark:text-white">hisense_ac</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">AC bridge</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🗂️</span><span className="font-semibold text-slate-900 dark:text-white">homepage</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">dashboard</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>📊</span><span className="font-semibold text-slate-900 dark:text-white">glances</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">system</span></div>
                              </div>
                          </div>

                          <div className="border border-[rgba(167,139,250,0.3)] rounded-md bg-slate-50 dark:bg-slate-900 overflow-hidden">
                              <div className="p-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 bg-[rgba(167,139,250,0.08)] text-[#a78bfa] flex items-center gap-2">
                                  <span>📈</span> Observability
                              </div>
                              <div className="p-2 space-y-1">
                                  <div className="flex items-center gap-2 text-xs"><span>📈</span><span className="font-semibold text-slate-900 dark:text-white">grafana</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">dashboards</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🔥</span><span className="font-semibold text-slate-900 dark:text-white">prometheus</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">metrics</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🗃️</span><span className="font-semibold text-slate-900 dark:text-white">influxdb</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">time-series</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>💻</span><span className="font-semibold text-slate-900 dark:text-white">node-exporter</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">host</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>⚙️</span><span className="font-semibold text-slate-900 dark:text-white">process-exp.</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">procs</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🎯</span><span className="font-semibold text-slate-900 dark:text-white">artillery</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">load tests</span></div>
                              </div>
                          </div>

                          <div className="border border-[rgba(63,185,80,0.3)] rounded-md bg-slate-50 dark:bg-slate-900 overflow-hidden">
                              <div className="p-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 bg-[rgba(63,185,80,0.08)] text-[#3fb950] flex items-center gap-2">
                                  <span>☁️</span> Cloud / Files
                              </div>
                              <div className="p-2 space-y-1">
                                  <div className="flex items-center gap-2 text-xs"><span>🖼️</span><span className="font-semibold text-slate-900 dark:text-white">immich</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">photos</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🤖</span><span className="font-semibold text-slate-900 dark:text-white">immich_ml</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">face/obj AI</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🐘</span><span className="font-semibold text-slate-900 dark:text-white">immich_pg</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">database</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>☁️</span><span className="font-semibold text-slate-900 dark:text-white">nextcloud</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">files/sync</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🐬</span><span className="font-semibold text-slate-900 dark:text-white">nextcloud_db</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">database</span></div>
                              </div>
                          </div>

                          <div className="border border-[rgba(244,114,182,0.3)] rounded-md bg-slate-50 dark:bg-slate-900 overflow-hidden">
                              <div className="p-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 bg-[rgba(244,114,182,0.08)] text-[#f472b6] flex items-center gap-2">
                                  <span>🔐</span> Security
                              </div>
                              <div className="p-2 space-y-1">
                                  <div className="flex items-center gap-2 text-xs"><span>🛡️</span><span className="font-semibold text-slate-900 dark:text-white">adguard</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">DNS / ads</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🗝️</span><span className="font-semibold text-slate-900 dark:text-white">vaultwarden</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">passwords</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🔐</span><span className="font-semibold text-slate-900 dark:text-white">nginx-vw</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">TLS proxy</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🖥️</span><span className="font-semibold text-slate-900 dark:text-white">rustdesk-hbbs</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">relay</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🖥️</span><span className="font-semibold text-slate-900 dark:text-white">rustdesk-hbbr</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">relay</span></div>
                              </div>
                          </div>

                          <div className="border border-[rgba(227,179,65,0.3)] rounded-md bg-slate-50 dark:bg-slate-900 overflow-hidden">
                              <div className="p-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 bg-[rgba(227,179,65,0.08)] text-[#e3b341] flex items-center gap-2">
                                  <span>⚙️</span> Apps / Misc
                              </div>
                              <div className="p-2 space-y-1">
                                  <div className="flex items-center gap-2 text-xs"><span>💰</span><span className="font-semibold text-slate-900 dark:text-white">firefly III</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">finances</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>📥</span><span className="font-semibold text-slate-900 dark:text-white">firefly-imp.</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">importer</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🧠</span><span className="font-semibold text-slate-900 dark:text-white">ollama</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">local LLM</span></div>
                                  <div className="flex items-center gap-2 text-xs"><span>🐳</span><span className="font-semibold text-slate-900 dark:text-white">portainer</span><span className="hidden lg:inline ml-auto text-slate-500 dark:text-slate-300">mgmt UI</span></div>
                              </div>
                          </div>

                          <div className="border border-[rgba(248,81,73,0.3)] rounded-md bg-slate-50 dark:bg-slate-900 overflow-hidden">
                              <div className="p-2 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 bg-[rgba(248,81,73,0.08)] text-[#f85149] flex items-center gap-2">
                                  <span>⚛️</span> Dev / Portfolio
                              </div>
                              <div className="p-2 space-y-2">
                                  <div className="flex items-center gap-2 text-xs"><span>⚛️</span><span className="font-semibold text-slate-900 dark:text-white">portfolio frontend</span></div>
                                  <div className="hidden lg:block text-slate-500 dark:text-slate-300 text-[0.75rem] leading-relaxed">
                                      React / Vite · self-hosted<br />
                                      Public via Cloudflare Tunnel<br />
                                      Isolated Docker network
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="flex flex-col gap-2.5">
              <div className="border border-[rgba(227,179,65,0.3)] rounded-lg bg-[rgba(227,179,65,0.1)] overflow-hidden">
                  <div className="flex items-center gap-2 p-2 border-b border-[rgba(227,179,65,0.3)] text-xs font-bold uppercase tracking-wider text-[#e3b341]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e3b341]"></div>
                      DNS / Network Services
                  </div>
                  <div className="p-2.5 space-y-2 text-xs">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[rgba(227,179,65,0.1)] text-[#e3b341]">🛡️ AdGuard Home — DNS + ad blocking</div>
                      <div className="text-slate-500 dark:text-slate-300 leading-relaxed">
                          All LAN DNS routed through AdGuard<br />
                          Upstream → public DNS resolvers<br />
                          Network-wide ad/tracker blocking<br />
                          DHCP handled by router
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-800 pt-2" />
                      <div className="text-slate-500 dark:text-slate-300 uppercase tracking-wider text-[0.65rem]">Public Exposure</div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[rgba(249,115,22,0.1)] text-[#f97316]">☁️ Portfolio site → Cloudflare Tunnel</div>
                      <div className="text-slate-500 dark:text-slate-300 leading-relaxed">
                          Zero open ports on router<br />
                          All other services via Tailscale only<br />
                          Fail2ban + SSH key-only auth
                      </div>
                  </div>
              </div>
          </div>
      </div><div className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
              Diagram inspired by{' '}
              <a
                  href="https://www.reddit.com/user/TheRealRatler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-300 hover:underline"
              >
                  u/TheRealRatler
              </a>
              's homelab architecture
          </div></>
  );
};

export default HomelabDiagram;



