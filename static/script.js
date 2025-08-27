const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const typingIndicator = document.getElementById('typingIndicator');
        const outfitModal = document.getElementById('outfitModal');
        const prompt = document.getElementById("messageInput").value.trim();


        const outfitCategories = {
            business: {
                title: "👔 Business Casual Collection",
                description: "Professional and stylish outfits for the modern workplace",
                outfits: [
                    {
                        name: "Classic Power Suit",
                        emoji: "👔",
                        description: "Tailored blazer with matching trousers",
                        price: "$299",
                        trend: "Executive Style"
                    },
                    {
                        name: "Smart Casual Dress",
                        emoji: "👗",
                        description: "Elegant midi dress with structured silhouette",
                        price: "$189",
                        trend: "Modern Professional"
                    },
                    {
                        name: "Blouse & Pencil Skirt",
                        emoji: "👚",
                        description: "Crisp white blouse with high-waist skirt",
                        price: "$149",
                        trend: "Timeless Chic"
                    },
                    {
                        name: "Business Casual Shoes",
                        emoji: "👠",
                        description: "Comfortable block heels for all-day wear",
                        price: "$129",
                        trend: "Comfort First"
                    },
                    {
                        name: "Professional Blazer",
                        emoji: "🧥",
                        description: "Structured blazer in neutral tones",
                        price: "$219",
                        trend: "Power Dressing"
                    },
                    {
                        name: "Work Appropriate Bag",
                        emoji: "👜",
                        description: "Structured tote for laptop and essentials",
                        price: "$179",
                        trend: "Functional Style"
                    }    
                    ]
            },
            spring: {
                title: "🌸 Spring Vibes Collection",
                description: "Fresh and floral looks to welcome the season",
                outfits: [
                    {
                        name: "Floral Midi Dress",
                        emoji: "🌺",
                        description: "Flowing dress with spring bloom patterns",
                        price: "$159",
                        trend: "Garden Party"
                    },
                    {
                        name: "Pastel Cardigan",
                        emoji: "🧶",
                        description: "Soft knit in delicate spring colors",
                        price: "$89",
                        trend: "Cozy Chic"
                    },
                    {
                        name: "Light Denim Jacket",
                        emoji: "🧥",
                        description: "Perfect layering piece for spring days",
                        price: "$119",
                        trend: "Casual Cool"
                    },
                    {
                        name: "Spring Sneakers",
                        emoji: "👟",
                        description: "White sneakers with pastel accents",
                        price: "$99",
                        trend: "Sporty Fresh"
                    },
                    {
                        name: "Flowy Blouse",
                        emoji: "👚",
                        description: "Feminine top with delicate details",
                        price: "$79",
                        trend: "Romantic Style"
                    },
                    {
                        name: "Spring Accessories",
                        emoji: "🌸",
                        description: "Delicate jewelry and floral scarves",
                        price: "$59",
                        trend: "Fresh Details"
                    }
                ]
            },
            night: {
                title: "🌙 Night Out Collection",
                description: "Glamorous looks for unforgettable evenings",
                outfits: [
                    {
                        name: "Sequin Party Dress",
                        emoji: "✨",
                        description: "Shimmering mini dress that catches light",
                        price: "$249",
                        trend: "Disco Glam"
                    },
                    {
                        name: "Little Black Dress",
                        emoji: "🖤",
                        description: "Classic LBD with modern twist",
                        price: "$199",
                        trend: "Timeless Elegance"
                    },
                    {
                        name: "Statement Heels",
                        emoji: "👠",
                        description: "Bold heels that make an entrance",
                        price: "$179",
                        trend: "Show Stopper"
                    },
                    {
                        name: "Leather Jacket",
                        emoji: "🧥",
                        description: "Edgy jacket for rock chic vibes",
                        price: "$299",
                        trend: "Rebel Style"
                    },
                    {
                        name: "Cocktail Clutch",
                        emoji: "👛",
                        description: "Elegant evening bag with chain strap",
                        price: "$129",
                        trend: "Night Essential"
                    },
                    {
                        name: "Bold Jewelry",
                        emoji: "💎",
                        description: "Statement pieces that shine bright",
                        price: "$89",
                        trend: "Drama Queen"
                    }
                ]
            },
            summer: {
                title: "☀️ Summer Casual Collection",
                description: "Breezy and comfortable styles for sunny days",
                outfits: [
                    {
                        name: "Sundress",
                        emoji: "☀️",
                        description: "Light and airy dress for hot days",
                        price: "$139",
                        trend: "Beach Ready"
                    },
                    {
                        name: "Denim Shorts",
                        emoji: "🩳",
                        description: "High-waist shorts with frayed hem",
                        price: "$69",
                        trend: "Casual Cool"
                    },
                    {
                        name: "Crop Top",
                        emoji: "👕",
                        description: "Cute cropped tee in vibrant colors",
                        price: "$39",
                        trend: "Young & Fun"
                    },
                    {
                        name: "Sandals",
                        emoji: "👡",
                        description: "Strappy sandals for endless walks",
                        price: "$79",
                        trend: "Boho Chic"
                    },
                    {
                        name: "Sun Hat",
                        emoji: "👒",
                        description: "Wide-brim hat for stylish protection",
                        price: "$59",
                        trend: "Sun Safety"
                    },
                    {
                        name: "Beach Bag",
                        emoji: "👜",
                        description: "Woven tote perfect for summer outings",
                        price: "$89",
                        trend: "Vacation Vibes"
                    }
                ]
            }
        };

        function showCategoryOutfits(category) {
            const categoryData = outfitCategories[category];
            if (!categoryData) return;

            document.getElementById('modalTitle').textContent = categoryData.title;
            document.getElementById('modalDescription').textContent = categoryData.description;
            
            const outfitGrid = document.getElementById('outfitGrid');
            outfitGrid.innerHTML = '';
            
            categoryData.outfits.forEach(outfit => {
                const outfitCard = document.createElement('div');
                outfitCard.className = 'outfit-card';
                outfitCard.innerHTML = `
                    <div class="outfit-image">
                        ${outfit.emoji}
                    </div>
                    <h4 style="margin: 0 0 8px 0; color: #333;">${outfit.name}</h4>
                    <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">${outfit.description}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="price-tag">${outfit.price}</span>
                        <small style="color: #ff6b9d; font-weight: 600;">${outfit.trend}</small>
                    </div>
                `;
                outfitGrid.appendChild(outfitCard);
            });
            
            outfitModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeOutfitModal() {
            outfitModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        outfitModal.addEventListener('click', function(e) {
            if (e.target === outfitModal) {
                closeOutfitModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && outfitModal.style.display === 'flex') {
                closeOutfitModal();
            }
        });

        

        function addMessage(content, isUser = false, hasOutfit = null) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user' : 'ai'}`;
            const formattedText = content
               .split('\n')
               .map(line => {
                  const trimmed = line.trim().toLowerCase();

                  let emoji = "";
                  if (trimmed.includes("dress")) emoji = "👗 ";
                  else if (trimmed.includes("jacket")) emoji = "🧥 ";
                  else if (trimmed.includes("sneakers") || trimmed.includes("shoes")) emoji = "👟 ";
                  else if (trimmed.includes("bag")) emoji = "👜 ";
                  else if (trimmed.includes("scarf")) emoji = "🧣 ";
                  else if (trimmed.includes("hat")) emoji = "👒 ";

                  return `<p>${emoji}${line.trim()}</p>`;
              })
            .join('');

             messageDiv.innerHTML = `
            <div class="message-avatar">${isUser ? '🧍' : '🤖'}</div>
            <div class="message-content">${formattedText}</div>
  `;
    chatMessages.insertBefore(messageDiv, typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    let outfitHTML = '';
    if (hasOutfit) {
        const outfitItems = hasOutfit.items.map(item => 
            `<div class="outfit-item">
                <div style="font-size: 24px; margin-bottom: 8px;">${item.emoji}</div>
                <div style="font-weight: 600; font-size: 14px;">${item.name}</div>
                <small style="color: #666;">${item.trend}</small>
            </div>`
        ).join('');
        
        outfitHTML = `
            <div class="outfit-suggestion">
                <h4>${hasOutfit.title}</h4>
                <div class="outfit-items">
                    ${outfitItems}
                </div>
            </div>
        `;
    }
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${isUser ? '👤' : '🤖'}</div>
        <div class="message-content">
            <p>${formattedText}</p>
            ${outfitHTML}
        </div>
    `;
    
    chatMessages.insertBefore(messageDiv, typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

        function showTyping() {
            typingIndicator.style.display = 'flex';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function hideTyping() {
            typingIndicator.style.display = 'none';
        }

        function getAIResponse(userMessage) {
            const message = userMessage.toLowerCase();
            
            for (let response of responses) {
                if (response.trigger.some(trigger => message.includes(trigger))) {
                    return response;
                }
            }
            
            return {
                response: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
                outfit: null
            };
        }

        function sendMessage() {
            const message = messageInput.value.trim();
            if (!message) return;
            
            addMessage(message, true);
            messageInput.value = '';
            
            showTyping();
            
            setTimeout(() => {
                hideTyping();
                const aiResponse = getAIResponse(message);
                addMessage(aiResponse.response, false, aiResponse.outfit);
            }, 1000 + Math.random() * 1000);
        }

        function sendSuggestion(suggestion) {
            messageInput.value = suggestion;
            sendMessage();
        }

        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // Add some initial animation
        setTimeout(() => {
            const header = document.querySelector('.chat-header');
            header.style.transform = 'translateY(0)';
        }, 100);
   async function sendMessage() {
  const message = messageInput.value.trim();
  if (!message) return;

  addMessage(message, true); // Show user message
  messageInput.value = '';
  showTyping();

  try {
    const res = await fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: message })
    });

    const data = await res.json();
    hideTyping();

    addMessage(data.response, false); // Show Gemini response
  } catch (err) {
    hideTyping();
    addMessage("Oops! Something went wrong.", false);
  }
}
