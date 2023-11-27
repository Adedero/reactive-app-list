function computeSize(size) {
    if (size < 0) {
        return '< 0 KB'
    } else if (size < 1000) {
        return (`${size} KB`)
    } else {
        const computedSize = size/1000;
        return `${computeSize} MB`
    }
}

export const allApps = [
    {
        id: 1,
        name: 'Canva',
        size: '250 MB',
        actualSize: 250,
        installationDate: '01-Apr-23',
        imageURL: 'https://img.icons8.com/fluency/96/canva-app.png',
        alt: 'canva',
        author: 'Canva Group'
    },
    {
        id: 2,
        name: 'Telegram',
        size: '120 MB',
        actualSize: 120,
        installationDate: '12-Jan-22',
        imageURL: 'https://img.icons8.com/fluency/96/telegram-app.png',
        alt: 'telegram',
        author: 'LAT'
    },
    {
        id: 3,
        name: 'Grammarly',
        size: '8.2 MB',
        actualSize: 8.2,
        installationDate: '24-Mar-23',
        imageURL: 'https://img.icons8.com/fluency/96/grammarly.png',
        alt: 'grammarly',
        author: 'Grammarly Inc'
    },
    {
        id: 4,
        name: 'Facebook',
        size: '1.3 GB',
        actualSize: 1300,
        installationDate: '01-Nov-21',
        imageURL: 'https://img.icons8.com/fluency/96/facebook-circled.png',
        alt: 'facebook',
        author: 'META'
    },
    {
        id: 5,
        name: 'Gmail',
        size: '7.9 MB',
        actualSize: 7.9,
        installationDate: '22-Apr-22',
        imageURL: 'https://img.icons8.com/fluency/96/gmail-new.png',
        alt: 'gmail',
        author: 'Google'
    },
    {
        id: 6,
        name: 'Skype',
        size: '100 MB',
        actualSize: 100,
        installationDate: '03-Dec-23',
        imageURL: 'https://img.icons8.com/fluency/96/skype.png',
        alt: 'skype',
        author: 'Microsoft Corporation'
    },
    {
        id: 7,
        name: 'DuoLingo',
        size: '23.3 MB',
        actualSize: 23.3,
        installationDate: '24-Jun-22',
        imageURL: 'https://img.icons8.com/fluency/96/duolingo-logo.png',
        alt: 'duolingo',
        author: 'Learn Lang'
    },
    {
        id: 8,
        name: 'Google Books',
        size: '1.2 MB',
        actualSize: 1.2,
        installationDate: '14-May-19',
        imageURL: 'https://img.icons8.com/fluency/96/google-books.png',
        alt: 'google_books',
        author: 'Google'
    },
    {
        id: 9,
        name: 'YouTube',
        size: '400 MB',
        actualSize: 400,
        installationDate: '13-Feb-21',
        imageURL: 'https://img.icons8.com/fluency/96/youtube.png',
        alt: 'youtube',
        author: 'Google'
    },
    {
        id: 10,
        name: 'Netflix',
        size: '534 MB',
        actualSize: 534,
        installationDate: '03-Jul-22',
        imageURL: 'https://img.icons8.com/fluency/96/netflix-desktop-app.png',
        alt: 'netflix',
        author: 'Netflix Incorporated'
    },
    {
        id: 11,
        name: "WhatsApp",
        size: "48 MB",
        actualSize: 48,
        installationDate: "21-Oct-23",
        imageURL: "https://img.icons8.com/fluency/96/whatsapp.png",
        alt: "whatsapp",
        author: 'META'
    },
    {
        id: 12,
        name: "Twitter",
        size: "55.4 MB",
        actualSize: 55.4,
        installationDate: "04-Aug-23",
        imageURL: "https://img.icons8.com/fluency/96/twitter.png",
        alt: "twitter",
        author: 'Elon Musk'
    },
    {
      id: 13,
      name: "Spotify",
      size: "85.5 MB",
      actualSize: 85.5,
      installationDate: "15-Sep-23",
      imageURL: "https://img.icons8.com/fluency/96/spotify.png",
      alt: "spotify",
      author: 'Google',
    },
    {
      id: 14,
      name: "Zoom",
      size: "85.3 MB",
      actualSize: 85.3,
      installationDate: "23-Mar-23",
      imageURL: "https://img.icons8.com/fluency/96/zoom.png",
      alt: "zoom",
      author: 'Zoom Technologies'
    },
    {
      id: 15,
      name: "Reddit",
      size: "45.5 MB",
      actualSize: 45.5,
      installationDate: "17-Feb-23",
      imageURL: "https://img.icons8.com/fluency/96/reddit.png",
      alt: "reddit",
      author: 'Redit Online'
    },
    {
      id: 16,
      name: "Shopee",
      size: "98.7 MB",
      actualSize: 98.7,
      installationDate: "28-Sep-23",
      imageURL: "https://img.icons8.com/fluency/96/shopee.png",
      alt: "shopee",
      author: 'Simulan'
    },
    {
      id: 17,
      name: "Amazon Shopping",
      size: "154.7 MB",
      actualSize: 154.7,
      installationDate: "05-Jan-23",
      imageURL: "https://img.icons8.com/fluency/96/amazon_shopping_app.png",
      alt: "amazon_shopping",
      author: 'Amazon International'
    },
    {
      id: 18,
      name: "Instagram",
      size: "89.4 MB",
      actualSize: 89.4,
      installationDate: "15-Nov-22",
      imageURL: "https://img.icons8.com/fluency/96/instagram-new.png",
      alt: "instagram",
      author: 'META'
    },
    {
      id: 19,
      name: "Yolo",
      size: "34.8 MB",
      actualSize: 34.8,
      installationDate: "07-Dec-22",
      imageURL: "https://img.icons8.com/fluency/96/yolo.png",
      alt: "yolo",
      author: 'Yolo TM'
    },
    {
      id: 20,
      name: "Microsoft Word",
      size: "543.2 MB",
      actualSize: 543.2,
      installationDate: "23-Jan-23",
      imageURL: "https://img.icons8.com/color/96/microsoft-word-2019--v2.png",
      alt: "microsoft_word",
      author: 'Microsoft Corporation'
    },
    {
      id: 21,
      name: "Microsoft Teams",
      size: "185.6 MB",
      actualSize: 185.6,
      installationDate: "04-Mar-23",
      imageURL: "https://img.icons8.com/fluency/96/microsoft-teams-2019.png",
      alt: "microsoft_teams",
      author: 'Microsoft Corporation'
    },
    {
      id: 22,
      name: "Discord",
      size: "75.4 MB",
      actualSize: 75.4,
      installationDate: "23-Mar-23",
      imageURL: "https://img.icons8.com/fluency/96/discord.png",
      alt: "discord",
      author: 'Discord Inc.'
    }
]