export default defineNuxtPlugin(() => {
    // Check if TikTok embed script is already loaded
    if (typeof window.tiktokEmbed !== 'undefined') {
        return
    }

    // Create and append the TikTok embed script
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true

    // Add the script to the document head
    document.head.appendChild(script)

    // Mark as loaded to prevent duplicate loading
    window.tiktokEmbed = true
})