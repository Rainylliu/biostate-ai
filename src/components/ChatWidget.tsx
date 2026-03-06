"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    // Only define once
    if (customElements.get("biostate-chat-widget")) return;

    class BiostateChatWidget extends HTMLElement {
      shadowRoot!: ShadowRoot;
      messageCount: number;
      FAQ_DATABASE: Array<{ keywords: string[]; answer: string }>;
      DEFAULT_ANSWER: string;
      WELCOME_MESSAGE: string;
      $toggle!: HTMLElement;
      $window!: HTMLElement;
      $close!: HTMLElement;
      $messages!: HTMLElement;
      $quickButtons!: HTMLElement;
      $input!: HTMLInputElement;
      $send!: HTMLElement;

      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.messageCount = 0;

        this.FAQ_DATABASE = [
          {
            keywords: ["pricing", "price", "cost", "quote", "how much", "报价", "价格", "多少钱", "费用", "收费"],
            answer: `<b>💰 RNA-seq Pricing</b><br><br>
<b>Standard service:</b><br>
• Base package: <b>$110 / sample</b><br>
&nbsp;&nbsp;- Library prep + 10M reads + Qubit QC<br><br>
• Full QC package: <b>$125 / sample</b> ⭐ Recommended<br>
&nbsp;&nbsp;- Library prep + 10M reads<br>
&nbsp;&nbsp;- Full QC (Bioanalyzer/TapeStation + Qubit)<br>
&nbsp;&nbsp;- Detailed QC report<br>
&nbsp;&nbsp;- Replacement for low-quality samples (if needed)<br><br>
<b>RNA extraction (add-on):</b><br>
• Cells / whole blood: $20 / sample<br>
• Tissue / FFPE: $60 / sample<br><br>
<b>Additional sequencing depth:</b><br>
• +10M reads: $15<br>
• 20M reads total: $30<br>
• 30M reads total: $45<br>
• 50M reads total: $60<br><br>
💡 Volume discounts are available—contact us for a quote!`
          },
          {
            keywords: ["sample", "requirements", "rin", "rna quality", "accepted", "types", "样本", "要求", "RNA质量", "RIN", "样品", "类型", "接受"],
            answer: `<b>🧪 Sample Requirements</b><br><br>
<b>RNA quality (RIN):</b><br>
• ✅ Preferred: RIN ≥ 6<br>
• ⚠️ Acceptable: RIN 4.5–6.5<br>
• Minimum processable: RIN ≥ 2 (results may be suboptimal)<br><br>
<b>Accepted sample types:</b><br>
• 📌 Purified RNA - 1.5 mL tube; LoBind recommended; seal with parafilm<br>
• 📌 Cells - pellet or in TRIzol (TRIzol recommended)<br>
• 📌 Tissue - fresh frozen or preserved in RNAlater<br>
• 📌 FFPE - can ship at room temperature; ≥ 2 sections<br>
• 📌 Whole blood - PAXgene preferred > EDTA > TRIzol<br>
• 📌 Plasma/serum - ≥ 2 mL per sample<br>
• 📌 Bone marrow - ~500 mg recommended<br><br>
<b>⚠️ Important notes:</b><br>
• Purified RNA must be DNase-treated<br>
• Qubit quantification is strongly recommended (NanoDrop may overestimate)<br>
• We do not accept live virus samples (not a BSL-3 facility)`
          },
          {
            keywords: ["shipping", "ship", "courier", "address", "dry ice", "package", "寄送", "快递", "运输", "地址", "邮寄", "干冰", "包装"],
            answer: `<b>📦 Shipping Instructions</b><br><br>
<b>Shipping address:</b><br>
Attn: Rachan Raj<br>
Phone: +1 (713) 489-9827<br>
Company: Biostate AI Laboratories<br>
Address: 7505 Fannin St, Suite 610<br>
Houston, TX 77054, USA<br><br>
<b>⏰ When to ship:</b><br>
• Ship only <b>Monday–Wednesday</b><br>
• Must arrive on a business day between 9:00 AM–4:00 PM<br>
• Use UPS or FedEx overnight<br><br>
<b>🧊 Dry ice:</b><br>
• ≥ 5 lb of dry ice per 24 hours in transit<br>
• FFPE samples can be shipped at room temperature<br><br>
<b>📋 Labeling:</b><br>
• Labels must exactly match the sample information sheet<br>
• Use a black cryo marker<br>
• Label the tube side (not just the cap)<br><br>
<b>📌 Important:</b><br>
• Share the tracking number at least 1 day in advance<br>
• Confirm holiday schedules before shipping`
          },
          {
            keywords: ["omicsweb", "copilot", "analysis", "platform", "ai", "software", "bioinformatics", "生信", "分析", "平台"],
            answer: `<b>🤖 OmicsWeb Copilot</b><br><br>
An AI-powered bioinformatics analysis platform—<b>included free with every RNA-seq project!</b><br><br>
<b>✨ Key features:</b><br>
• 🗣️ Natural-language queries (no coding required)<br>
• 📊 Differential expression analysis<br>
• 📈 PCA and clustering<br>
• 🔥 Heatmaps and volcano plots<br>
• 🧬 Pathway/enrichment analysis<br>
• 📄 Publication-ready visualizations<br>
• 💾 Exportable code for reproducibility<br><br>
<b>💬 Example questions:</b><br>
• "Run differential expression between Group A and Group B"<br>
• "Generate a volcano plot"<br>
• "Show the top 10 upregulated genes"<br>
• "Create a heatmap"<br>
• "Run pathway enrichment analysis"<br><br>
Supports both bulk and single-cell RNA-seq data!`
          },
          {
            keywords: ["contact", "email", "phone", "support", "help", "联系方式", "联系", "电话", "邮箱", "客服", "咨询"],
            answer: `<b>📞 Contact Us</b><br><br>
<b>Email:</b><br>
• 📧 partnerships@biostate.ai<br>
• 📧 rachan.raj@biostate.ai<br><br>
<b>Phone:</b><br>
• 📱 +1 (713) 489-9827<br><br>
<b>Address:</b><br>
🏢 7505 Fannin St, Suite 610<br>
Houston, TX 77054, USA<br><br>
We typically respond within 1–2 business days.`
          },
          {
            keywords: ["sequencing", "illumina", "platform", "read length", "reads", "depth", "测序", "平台", "读长", "深度"],
            answer: `<b>🔬 Sequencing Specifications</b><br><br>
<b>Platform:</b><br>
• Illumina (NovaSeq-class)<br>
• Read length: Paired-end 150 bp (PE150)<br>
• Library: Strand-specific, double-stranded cDNA<br><br>
<b>Data yield:</b><br>
• Typical mapping rate: 70–90%<br>
• With 10M reads, you can typically detect:<br>
&nbsp;&nbsp;- ~30,000 genes (total)<br>
&nbsp;&nbsp;- ~15,000 protein-coding genes<br><br>
<b>Deliverables:</b><br>
• Raw FASTQ files (R1 & R2)<br>
• MD5 checksum file<br>
• counts.txt (all genes)<br>
• count_filtered.txt (protein-coding genes)<br>
• OmicsWeb Copilot access<br><br>
Turnaround time: ~2 weeks`
          },
          {
            keywords: ["rna types", "mrna", "lncrna", "mirna", "noncoding", "detect", "RNA类型", "mRNA", "lncRNA", "miRNA", "非编码", "检测"],
            answer: `<b>🧬 RNA Types We Can Detect</b><br><br>
<b>✅ Supported:</b><br>
• mRNA – primary target<br>
• lncRNA – reliably detected<br><br>
<b>⚠️ Possible (not validated):</b><br>
• circRNA – recommend a pilot test<br><br>
<b>❌ Not supported:</b><br>
• miRNA – requires a dedicated small RNA workflow<br>
• tRNA – requires a dedicated workflow<br><br>
💡 If you need miRNA/small RNA sequencing, contact us to discuss options.`
          },
          {
            keywords: ["qc", "quality control", "failed", "refund", "policy", "质控", "失败", "退款", "问题"],
            answer: `<b>📋 QC & Refund Policy</b><br><br>
<b>When QC fails:</b><br>
• We will notify you immediately<br>
• We will proceed only after written approval<br>
• Additional fees may apply depending on the situation<br><br>
<b>Refunds:</b><br>
• ❌ No refunds for issues caused by degraded/low-quality input samples<br>
• ❌ No refunds if you approve processing despite QC concerns<br>
• ✅ If the issue is confirmed to be Biostate AI's responsibility, resequencing may be considered case-by-case<br><br>
<b>Read-depth assurance:</b><br>
• If a sample yields < 80% of the target read depth, we typically provide a credit usable toward a future order`
          },
          {
            keywords: ["turnaround", "timeline", "how long", "delivery", "time", "周期", "多久", "交付", "时间"],
            answer: `<b>⏱️ Turnaround Time</b><br><br>
• Gene count tables and FASTQ files: <b>~2 weeks</b><br>
• OmicsWeb analysis: <b>minutes to hours</b><br><br>
A project starts when:<br>
1. We receive a valid purchase order (PO) or payment<br>
2. Samples arrive at Biostate AI<br><br>
💡 Submitting an order form alone does not start processing.`
          }
        ];

        this.DEFAULT_ANSWER = `Sorry—I couldn't find a specific answer for that.<br><br>
You can try asking about:<br>
• 💰 Pricing / Quote<br>
• 🧪 Sample requirements<br>
• 📦 Shipping instructions<br>
• 🔬 Sequencing specifications<br>
• 🤖 OmicsWeb analysis platform<br><br>
Or contact us directly:<br>
📧 partnerships@biostate.ai<br>
📱 +1 (713) 489-9827`;

        this.WELCOME_MESSAGE = `👋 Hi! I'm Biostate AI's virtual support assistant.<br><br>
I can help with:<br>
• 💰 RNA-seq pricing<br>
• 🧪 Sample requirements<br>
• 📦 Shipping instructions<br>
• 🔬 Sequencing specifications<br>
• 🤖 OmicsWeb Copilot analysis platform<br><br>
What can I help you with today?`;
      }

      connectedCallback() {
        if (this.shadowRoot && this.shadowRoot.childNodes.length) return;
        this.shadowRoot.innerHTML = `
          <style>
            :host{
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              font-size: 16px;
              line-height: 1.4;
              color: #0f172a;
            }
            *, *::before, *::after { box-sizing: border-box; }
            .chat-toggle {
              position: fixed;
              bottom: 24px;
              right: 24px;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: linear-gradient(135deg, #45D0BD 0%, #44B6E9 100%);
              border: none;
              cursor: pointer;
              box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 28px;
              transition: transform 0.3s, box-shadow 0.3s;
              z-index: 9998;
            }
            .chat-toggle:hover {
              transform: scale(1.1);
              box-shadow: 0 6px 25px rgba(37, 99, 235, 0.5);
            }
            .chat-window {
              position: fixed;
              bottom: 100px;
              right: 24px;
              width: 380px;
              height: 550px;
              background: white;
              border-radius: 16px;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
              display: none;
              flex-direction: column;
              overflow: hidden;
              z-index: 9999;
              animation: slideUp 0.3s ease;
            }
            .chat-window.open { display: flex; }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .chat-header {
              background: linear-gradient(135deg, #45D0BD 0%, #44B6E9 100%);
              color: white;
              padding: 16px 20px;
              display: flex;
              align-items: center;
              gap: 12px;
            }
            .chat-header-icon {
              width: 40px;
              height: 40px;
              background: rgba(255,255,255,0.2);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              flex: 0 0 auto;
            }
            .chat-header-text h3 { font-size: 16px; font-weight: 600; margin: 0; }
            .chat-header-text p { font-size: 12px; opacity: 0.9; margin: 2px 0 0 0; }
            .chat-close {
              margin-left: auto;
              background: none;
              border: none;
              color: white;
              font-size: 24px;
              cursor: pointer;
              opacity: 0.8;
              transition: opacity 0.2s;
              line-height: 1;
            }
            .chat-close:hover { opacity: 1; }
            .chat-messages {
              flex: 1;
              overflow-y: auto;
              padding: 16px;
              background: #f8fafc;
            }
            .message { margin-bottom: 12px; display: flex; }
            .message.user { justify-content: flex-end; }
            .message.assistant { justify-content: flex-start; }
            .message-bubble {
              max-width: 85%;
              padding: 12px 16px;
              border-radius: 16px;
              font-size: 14px;
              line-height: 1.6;
              word-break: break-word;
            }
            .message.user .message-bubble {
              background: linear-gradient(135deg, #45D0BD 0%, #44B6E9 100%);
              color: white;
              border-bottom-right-radius: 4px;
            }
            .message.assistant .message-bubble {
              background: white;
              color: #1e293b;
              border-bottom-left-radius: 4px;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }
            .typing-indicator { display: flex; gap: 4px; padding: 12px 16px; }
            .typing-dot {
              width: 8px;
              height: 8px;
              background: #94a3b8;
              border-radius: 50%;
              animation: bounce 1.4s infinite ease-in-out;
            }
            .typing-dot:nth-child(1) { animation-delay: -0.32s; }
            .typing-dot:nth-child(2) { animation-delay: -0.16s; }
            @keyframes bounce {
              0%, 80%, 100% { transform: scale(0); }
              40% { transform: scale(1); }
            }
            .quick-buttons {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
              padding: 12px 16px;
              background: #f8fafc;
              border-top: 1px solid #e2e8f0;
            }
            .quick-btn {
              padding: 8px 14px;
              background: white;
              border: 1px solid #e2e8f0;
              border-radius: 18px;
              font-size: 13px;
              color: #2563eb;
              cursor: pointer;
              transition: all 0.2s;
            }
            .quick-btn:hover { background: #eff6ff; border-color: #2563eb; }
            .chat-input-area {
              padding: 12px 16px;
              background: white;
              border-top: 1px solid #e2e8f0;
              display: flex;
              gap: 10px;
            }
            .chat-input {
              flex: 1;
              padding: 10px 14px;
              border: 1px solid #e2e8f0;
              border-radius: 20px;
              font-size: 14px;
              outline: none;
              transition: border-color 0.2s;
            }
            .chat-input:focus { border-color: #2563eb; }
            .chat-send {
              padding: 10px 20px;
              background: #45D0BD;
              color: white;
              border: none;
              border-radius: 20px;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
              transition: background 0.2s;
            }
            .chat-send:hover { background: #44B6E9; }
            .chat-send:disabled { background: #94a3b8; cursor: not-allowed; }
            .chat-footer {
              padding: 8px;
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              background: white;
              border-top: 1px solid #e2e8f0;
            }
            .chat-footer a { color: #2563eb; text-decoration: none; }
            .chat-footer a:hover { text-decoration: underline; }
            @media (max-width: 480px) {
              .chat-window {
                width: calc(100% - 20px);
                height: calc(100% - 120px);
                right: 10px;
                bottom: 90px;
              }
            }
          </style>
          <button class="chat-toggle" id="chatToggle" type="button" aria-label="Open chat">💬</button>
          <div class="chat-window" id="chatWindow" role="dialog" aria-label="Biostate AI Support">
            <div class="chat-header">
              <div class="chat-header-icon">🤖</div>
              <div class="chat-header-text">
                <h3>Biostate AI Support</h3>
                <p>RNA-seq Service Help</p>
              </div>
              <button class="chat-close" id="chatClose" type="button" aria-label="Close chat">×</button>
            </div>
            <div class="chat-messages" id="chatMessages"></div>
            <div class="quick-buttons" id="quickButtons">
              <button class="quick-btn" type="button" data-q="How much does it cost?">💰 Pricing</button>
              <button class="quick-btn" type="button" data-q="What are the sample requirements?">🧪 Sample Requirements</button>
              <button class="quick-btn" type="button" data-q="How do I ship samples?">📦 Shipping</button>
              <button class="quick-btn" type="button" data-q="What is OmicsWeb?">🤖 OmicsWeb</button>
              <button class="quick-btn" type="button" data-q="How can I contact you?">📞 Contact</button>
            </div>
            <div class="chat-input-area">
              <input class="chat-input" id="chatInput" type="text" placeholder="Type your question..." />
              <button class="chat-send" id="chatSend" type="button">Send</button>
            </div>
            <div class="chat-footer">
              Need a human? <a href="mailto:partnerships@biostate.ai">partnerships@biostate.ai</a>
            </div>
          </div>
        `;

        this.$toggle = this.shadowRoot.getElementById("chatToggle")!;
        this.$window = this.shadowRoot.getElementById("chatWindow")!;
        this.$close = this.shadowRoot.getElementById("chatClose")!;
        this.$messages = this.shadowRoot.getElementById("chatMessages")!;
        this.$quickButtons = this.shadowRoot.getElementById("quickButtons")!;
        this.$input = this.shadowRoot.getElementById("chatInput") as HTMLInputElement;
        this.$send = this.shadowRoot.getElementById("chatSend")!;

        this.$toggle.addEventListener("click", () => this.toggleChat());
        this.$close.addEventListener("click", () => this.toggleChat());
        this.$send.addEventListener("click", () => this.sendMessage());
        this.$input.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Enter") this.sendMessage();
        });
        this.$quickButtons.addEventListener("click", (e: Event) => {
          const btn = (e.target as HTMLElement).closest("button[data-q]");
          if (!btn) return;
          this.sendQuickQuestion(btn.getAttribute("data-q")!);
        });
      }

      toggleChat() {
        const isOpen = this.$window.classList.toggle("open");
        this.$toggle.textContent = isOpen ? "✕" : "💬";
        this.$toggle.setAttribute("aria-label", isOpen ? "Close chat" : "Open chat");
        if (isOpen && this.messageCount === 0) {
          this.addMessage(this.WELCOME_MESSAGE, "assistant");
        }
      }

      addMessage(content: string, role: string) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${role}`;
        const bubble = document.createElement("div");
        bubble.className = "message-bubble";
        if (role === "user") {
          bubble.textContent = content;
        } else {
          bubble.innerHTML = content;
        }
        messageDiv.appendChild(bubble);
        this.$messages.appendChild(messageDiv);
        this.$messages.scrollTop = this.$messages.scrollHeight;
        this.messageCount++;
        if (this.messageCount > 2) {
          this.$quickButtons.style.display = "none";
        }
      }

      showTyping() {
        const typingDiv = document.createElement("div");
        typingDiv.className = "message assistant";
        typingDiv.id = "typingIndicator";
        typingDiv.innerHTML = `
          <div class="message-bubble typing-indicator" aria-label="Assistant is typing">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        `;
        this.$messages.appendChild(typingDiv);
        this.$messages.scrollTop = this.$messages.scrollHeight;
      }

      hideTyping() {
        const typing = this.shadowRoot.getElementById("typingIndicator");
        if (typing) typing.remove();
      }

      findAnswer(question: string) {
        const q = (question || "").toLowerCase();
        for (const faq of this.FAQ_DATABASE) {
          for (const keyword of faq.keywords) {
            if (q.includes(String(keyword).toLowerCase())) return faq.answer;
          }
        }
        return this.DEFAULT_ANSWER;
      }

      sendMessage() {
        const message = this.$input.value.trim();
        if (!message) return;
        this.addMessage(message, "user");
        this.$input.value = "";
        this.showTyping();
        setTimeout(() => {
          this.hideTyping();
          const answer = this.findAnswer(message);
          this.addMessage(answer, "assistant");
        }, 800);
      }

      sendQuickQuestion(question: string) {
        this.$input.value = question;
        this.sendMessage();
      }
    }

    customElements.define("biostate-chat-widget", BiostateChatWidget);

    // Add element to body if not already present
    if (!document.querySelector("biostate-chat-widget")) {
      document.body.appendChild(document.createElement("biostate-chat-widget"));
    }

    return () => {
      const el = document.querySelector("biostate-chat-widget");
      if (el) el.remove();
    };
  }, []);

  return null;
}
