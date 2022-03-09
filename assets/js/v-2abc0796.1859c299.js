"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[801],{921:(e,i,t)=>{t.r(i),t.d(i,{data:()=>l});const l={key:"v-2abc0796",path:"/installing-henkaku.html",title:"Installing HENkaku",lang:"en-US",frontmatter:{title:"Installing HENkaku"},excerpt:"",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],filePathRelative:"installing-henkaku.md",git:{updatedTime:1635953747e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},5414:(e,i,t)=>{t.r(i),t.d(i,{default:()=>y});var l=t(6252);const a=(0,l.uE)('<h3 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h3><p>HENkaku is an exploit chain for the PS Vita (TV) which will allow for the installation of homebrew applications to the LiveArea Screen. It is only compatible with the firmware version 3.60.</p><p>Note that the HENkaku exploit chain is not &quot;persistent&quot; (meaning it does not remain installed after a reboot). Fortunately, this is only a temporary restriction until HENkaku Ensō is installed on the next page.</p><p>In addition to running the HENkaku exploit, we will also enable access to &quot;unsafe&quot; homebrew which gives extended permissions to homebrew applications. This idea could be considered analogous to the &quot;administrator&quot; mode on a computer.</p><p>The &quot;VitaDeploy&quot; application will also be installed to your home screen. VitaDeploy makes installing apps, plugins, and custom firmwares simple and includes many useful tools and utilites.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you have a PS Vita 1000, you must also have an official Sony memory card (of any size) to follow this guide. This restriction does not apply to the PS Vita 2000 or PS TV as those devices have a built-in memory card.</p></div><h3 id="what-you-need" tabindex="-1"><a class="header-anchor" href="#what-you-need" aria-hidden="true">#</a> What You Need</h3>',7),o=(0,l._)("li",null,"An internet connection on your PS Vita (TV)",-1),n=(0,l.Uk)("An FTP Client such as "),r={href:"https://winscp.net/",target:"_blank",rel:"noopener noreferrer"},s=(0,l.Uk)("WinSCP"),u=(0,l.Uk)(" or "),c={href:"https://cyberduck.io/",target:"_blank",rel:"noopener noreferrer"},h=(0,l.Uk)("CyberDuck"),d=(0,l.Uk)("The latest release of "),p={href:"https://github.com/SKGleba/VitaDeploy/releases/latest/",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("VitaDeploy"),k=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Download the "),(0,l._)("code",null,"VitaDeploy.vpk"),(0,l.Uk)(" file")])],-1),m=(0,l.uE)('<h3 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h3><h4 id="section-i-launching-henkaku" tabindex="-1"><a class="header-anchor" href="#section-i-launching-henkaku" aria-hidden="true">#</a> Section I - Launching HENkaku</h4><ol><li>Launch the browser and go to the following URL on your device: <code>http://henkaku.xyz</code></li><li>Tap &quot;Install&quot;</li><li>Read the disclaimer, then tap &quot;Install&quot; <ul><li>If you get an error and cannot proceed, <a href="troubleshooting#a-browser-based-exploit-is-not-working">follow this troubleshooting guide</a></li></ul></li><li>If the exploit was successful, you will now have a bubble on your LiveArea screen named &quot;molecularShell&quot;. <ul><li>If the exploit was successful but the molecularShell application is missing, perform the exploit again and press R1 when prompted to re-install molecularShell.</li></ul></li></ol><p>If you have VitaShell installed from a previous homebrew installation, HENkaku won&#39;t install molecularShell as it will detect a pre-existing taiHEN config. This will not be an issue.</p><h4 id="section-ii-installing-vitadeploy" tabindex="-1"><a class="header-anchor" href="#section-ii-installing-vitadeploy" aria-hidden="true">#</a> Section II - Installing VitaDeploy</h4><ol><li>Launch the molecularShell application</li><li>Press (Select) to enable FTP access on your device</li><li>Open your FTP client on your computer</li><li>Enter the IP Address and Port displayed on your device</li><li>Using your FTP client, navigate to <code>ux0:</code> -&gt; <code>data/</code></li><li>Transfer <code>VitaDeploy.vpk</code> to the <code>data</code> folder</li><li>Press (Circle) on your device to close the FTP connection</li><li>On your device, navigate to <code>ux0:</code> -&gt; <code>data/</code></li><li>Press (Cross) on <code>VitaDeploy.vpk</code> to install it</li><li>Press (Cross) again to confirm the install</li><li>Press (Cross) once more to confirm again</li><li>Close the molecularShell application</li></ol><h4 id="section-iii-configuring-henkaku" tabindex="-1"><a class="header-anchor" href="#section-iii-configuring-henkaku" aria-hidden="true">#</a> Section III - Configuring HENkaku</h4><ol><li>Launch the Settings application</li><li>Navigate to <code>HENkaku Settings</code></li><li>Check &quot;Enable Unsafe Homebrew&quot;</li><li>Return to HENkaku Settings menu</li><li>Close the Settings application</li></ol>',8),f={},y=(0,t(3744).Z)(f,[["render",function(e,i){const t=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[a,(0,l._)("ul",null,[o,(0,l._)("li",null,[n,(0,l._)("a",r,[s,(0,l.Wm)(t)]),u,(0,l._)("a",c,[h,(0,l.Wm)(t)])]),(0,l._)("li",null,[d,(0,l._)("a",p,[g,(0,l.Wm)(t)]),k])]),m],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,l]of i)t[e]=l;return t}}}]);