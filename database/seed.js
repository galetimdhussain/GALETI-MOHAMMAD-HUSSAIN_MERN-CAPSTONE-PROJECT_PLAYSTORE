const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: path.join(__dirname, '..', 'backend', '.env') });

const { connectDb, disconnectDb } = require('../backend/config/db');
const User = require('../backend/models/User');
const Category = require('../backend/models/Category');
const Application = require('../backend/models/Application');
const Review = require('../backend/models/Review');
const Download = require('../backend/models/Download');
const Notification = require('../backend/models/Notification');

const snapshot = {
  exportedAt: new Date("2026-03-16T20:00:14.092Z"),
  categories: [
    {
      _id: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fc"),
      name: "Games",
      slug: "games",
      description: "Interactive and entertainment applications for gamers.",
      isActive: true,
      __v: 0,
      createdAt: new Date("2026-03-13T11:18:23.616Z"),
      updatedAt: new Date("2026-03-16T19:45:56.407Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fd"),
      name: "Beauty",
      slug: "beauty",
      description: "Beauty, makeup, and self-care related applications.",
      isActive: true,
      __v: 0,
      createdAt: new Date("2026-03-13T11:18:23.619Z"),
      updatedAt: new Date("2026-03-16T19:45:56.409Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fe"),
      name: "Fashion",
      slug: "fashion",
      description: "Style, trends, shopping, and fashion discovery apps.",
      isActive: true,
      __v: 0,
      createdAt: new Date("2026-03-13T11:18:23.620Z"),
      updatedAt: new Date("2026-03-16T19:45:56.411Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2ff"),
      name: "Women",
      slug: "women",
      description: "Applications focused on women-centric services and content.",
      isActive: true,
      __v: 0,
      createdAt: new Date("2026-03-13T11:18:23.620Z"),
      updatedAt: new Date("2026-03-16T19:45:56.413Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b3f27f98a733d22148e300"),
      name: "Health",
      slug: "health",
      description: "Fitness, wellness, and healthcare applications.",
      isActive: true,
      __v: 0,
      createdAt: new Date("2026-03-13T11:18:23.620Z"),
      updatedAt: new Date("2026-03-16T19:45:56.416Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b5462ed2680b590dde6860"),
      slug: "social",
      __v: 0,
      createdAt: new Date("2026-03-14T11:27:42.622Z"),
      description: "Messaging, communities, and social networking applications.",
      isActive: true,
      name: "Social",
      updatedAt: new Date("2026-03-16T19:45:56.419Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b5462ed2680b590dde6861"),
      slug: "technology",
      __v: 0,
      createdAt: new Date("2026-03-14T11:27:42.702Z"),
      description: "Developer tools, productivity, and modern technology platforms.",
      isActive: true,
      name: "Technology",
      updatedAt: new Date("2026-03-16T19:45:56.421Z")
    }
  ],
  users: [
    {
      _id: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      name: "GALETI MOHAMMAD HUSSAIN",
      email: "hussaingaleti786@gmail.com",
      password: "$2a$10$2juD3iOsWFWmIHic6s21iekO2nidNlTq0TyyDTXb2jKDCBjLy6c7y",
      role: "owner",
      subscribedApps: [],
      createdAt: new Date("2026-03-16T13:57:57.831Z"),
      updatedAt: new Date("2026-03-16T13:57:57.831Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      name: "Asha Sharma",
      email: "user@playstore.dev",
      password: "$2a$10$N3jxj3YTgYIZ.QUii6RAbeR4JzceWBb/ChaFDrESOtaVzRWBrPlSe",
      role: "user",
      subscribedApps: [
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b14"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b17"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1a")
      ],
      createdAt: new Date("2026-03-16T13:57:57.832Z"),
      updatedAt: new Date("2026-03-16T13:57:59.633Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      name: "Kiran Patel",
      email: "user2@playstore.dev",
      password: "$2a$10$PRb5OBZWyBJqjazsrLQKZOgwzvo4K5R4z/3LxO6LhVc1H2PaZnz9C",
      role: "user",
      subscribedApps: [
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0f"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b13"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b15"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b18"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e")
      ],
      createdAt: new Date("2026-03-16T13:57:57.832Z"),
      updatedAt: new Date("2026-03-16T13:57:59.634Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
      name: "sudheer hussain",
      email: "sudheer@gmail.com",
      password: "$2a$10$SIsJdmSJ89EKndbaWQXku.kfcNX8ZjEG1oI7MfmDDaJOJXaA/B5L6",
      role: "user",
      subscribedApps: [
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
        new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1a")
      ],
      createdAt: new Date("2026-03-16T14:13:28.855Z"),
      updatedAt: new Date("2026-03-16T19:39:12.931Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b85cb35f80b81363580474"),
      name: "Dummyuser",
      email: "dummy@gmail.com",
      password: "$2a$10$4.MEmvzZcpkH7DKyD6Spu.cP8cJX42Xl2zp2YfUfmbzrYL5Ve61yy",
      role: "user",
      subscribedApps: [
        new mongoose.Types.ObjectId("69b85db95f80b8136358051d")
      ],
      createdAt: new Date("2026-03-16T19:40:35.639Z"),
      updatedAt: new Date("2026-03-16T19:47:14.628Z"),
      __v: 0
    }
  ],
  applications: [
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
      name: "WhatsApp",
      description: "Instant messaging platform for personal chats, calls, media sharing, and cross-device communication.",
      version: "2.26.4",
      releaseDate: new Date("2026-02-10T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b5462ed2680b590dde6860"),
      genre: "Messaging",
      rating: 4.5,
      averageRating: 4.5,
      reviewCount: 2,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/688fa189-427f-34ea-b7db-95ac892b0df5/t_500x300",
      featureHighlights: [
        "Encrypted chat",
        "Voice and video calls",
        "File sharing"
      ],
      downloadCount: 2,
      lastAnnouncement: "Improved call stability, media sync, and device linking experience.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T19:28:23.391Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      name: "Instagram",
      description: "Photo and short video sharing platform with reels, stories, creator tools, and social discovery.",
      version: "14.8.5.0",
      releaseDate: new Date("2026-03-16T14:18:21.955Z"),
      category: new mongoose.Types.ObjectId("69b5462ed2680b590dde6860"),
      genre: "Social Media",
      rating: 3,
      averageRating: 3,
      reviewCount: 2,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/e9d6381f-6a16-39d9-b6f9-1467838c022c/t_500x300",
      featureHighlights: [
        "Reels",
        "Stories",
        "Creator insights"
      ],
      downloadCount: 3,
      lastAnnouncement: "bugs fixed....",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T19:28:23.260Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0f"),
      name: "IMO",
      description: "Lightweight messaging and calling app for video chats, voice calls, and quick text conversations.",
      version: "2026.3.0",
      releaseDate: new Date("2026-03-03T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b5462ed2680b590dde6860"),
      genre: "Video Calling",
      rating: 4,
      averageRating: 4,
      reviewCount: 1,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://sp.yimg.com/ib/th/id/OIP.5hJq2wyweBXztXChyXVaygHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      featureHighlights: [
        "Video calls",
        "Low data mode",
        "Fast messaging"
      ],
      downloadCount: 1,
      lastAnnouncement: "Call quality and group chat stability were improved in this release.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T14:02:53.089Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b10"),
      name: "Telegram",
      description: "Cloud messaging app with fast chat sync, channels, large groups, and media sharing across devices.",
      version: "11.0.1",
      releaseDate: new Date("2026-02-26T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b5462ed2680b590dde6860"),
      genre: "Messaging",
      rating: 0,
      averageRating: 0,
      reviewCount: 0,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/a9756dc7-5840-398b-9d7c-a262e956f840/t_500x300",
      featureHighlights: [
        "Channels",
        "Large groups",
        "Cloud sync"
      ],
      downloadCount: 0,
      lastAnnouncement: "Channel tools and media sharing improvements are included in the latest update.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T19:28:23.322Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      name: "PUBG Mobile",
      description: "Battle royale shooter with multiplayer squads, ranked matches, and seasonal maps.",
      version: "3.2.0",
      releaseDate: new Date("2026-02-24T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fc"),
      genre: "Battle Royale",
      rating: 4.3,
      averageRating: 4.3,
      reviewCount: 3,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://sp.yimg.com/ib/th/id/OIP.DBuALb9Y4EzzMNRjF0HpgAHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      featureHighlights: [
        "Squad mode",
        "Tournament ready",
        "Season rewards"
      ],
      downloadCount: 3,
      lastAnnouncement: "New arena mode and smoother matchmaking are now live.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T14:14:44.699Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b12"),
      name: "Free Fire MAX",
      description: "Action-packed survival shooter focused on fast-paced matches, competitive squads, and map-based strategy.",
      version: "8.4.0",
      releaseDate: new Date("2026-03-05T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fc"),
      genre: "Survival Shooter",
      rating: 0,
      averageRating: 0,
      reviewCount: 0,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/fz/api/res/1.2/UvtS0YSj6PxEiNlIQFgcJQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cT04MDt3PTUxMg--/https://s.yimg.com/am/60d/2fc043867bdd594bed3f874dc6d130ac",
      featureHighlights: [
        "Fast matches",
        "Elite pass rewards",
        "Team strategy"
      ],
      downloadCount: 0,
      lastAnnouncement: "Weapon balancing and new squad events were added this month.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T19:28:23.333Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b13"),
      name: "Contra Returns",
      description: "Classic arcade action game with modern missions, co-op battles, and upgraded weapon systems.",
      version: "5.1.2",
      releaseDate: new Date("2026-01-29T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fc"),
      genre: "Arcade Shooter",
      rating: 5,
      averageRating: 5,
      reviewCount: 1,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://tse3.mm.bing.net/th/id/OIP.3xiACilljzHlgsixzgTeMwHaHa?pid=Api&P=0&h=180",
      featureHighlights: [
        "Boss battles",
        "Co-op mode",
        "Weapon upgrades"
      ],
      downloadCount: 1,
      lastAnnouncement: "New challenge missions and boss stages have been unlocked.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T14:10:32.984Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b14"),
      name: "Nykaa Beauty",
      description: "Beauty shopping and discovery app with curated collections, offers, expert tips, and tutorials.",
      version: "5.4.2",
      releaseDate: new Date("2026-01-28T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fd"),
      genre: "Beauty Commerce",
      rating: 4,
      averageRating: 4,
      reviewCount: 1,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://tse3.mm.bing.net/th/id/OIP.hEKpp4AqzA53jgFXHbnFzAHaEK?pid=Api&P=0&h=180",
      featureHighlights: [
        "Personalized picks",
        "Flash offers",
        "Beauty tips"
      ],
      downloadCount: 1,
      lastAnnouncement: "Skincare bundles and festive offers were refreshed for this week.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T14:11:12.980Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b15"),
      name: "Myntra",
      description: "Fashion-first shopping platform for apparel, footwear, accessories, and style curation.",
      version: "4.9.1",
      releaseDate: new Date("2026-02-18T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fe"),
      genre: "Shopping",
      rating: 5,
      averageRating: 5,
      reviewCount: 1,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/9660a32b-34de-3825-be4d-d32d8bdd7471/t_500x300",
      featureHighlights: [
        "Trend boards",
        "Size guidance",
        "Wishlist sync"
      ],
      downloadCount: 1,
      lastAnnouncement: "Fresh spring collections are now available in the style feed.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T14:05:32.453Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b16"),
      name: "Pinterest",
      description: "Idea discovery app for fashion, decor, recipes, design references, and daily inspiration boards.",
      version: "1.8.4",
      releaseDate: new Date("2026-01-19T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fe"),
      genre: "Lifestyle",
      rating: 0,
      averageRating: 0,
      reviewCount: 0,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/6ac3bb26-16f9-3146-8507-c4bf8053cd4a/t_500x300",
      featureHighlights: [
        "Idea boards",
        "Saved pins",
        "Style inspiration"
      ],
      downloadCount: 0,
      lastAnnouncement: "Fresh fashion, decor, and recipe boards are now featured.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T19:28:23.344Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b17"),
      name: "Flo",
      description: "Wellness app that helps users track cycles, symptoms, reminders, and personalized health insights.",
      version: "1.6.3",
      releaseDate: new Date("2026-02-02T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2ff"),
      genre: "Health Tracking",
      rating: 5,
      averageRating: 5,
      reviewCount: 1,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://flo.health/images/flo.svg",
      featureHighlights: [
        "Cycle tracking",
        "Symptom logging",
        "Health reminders"
      ],
      downloadCount: 1,
      lastAnnouncement: "Cycle insights and reminder settings have been improved.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T14:06:57.200Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b18"),
      name: "HealthifyMe",
      description: "Nutrition and fitness tracking app with calorie logging, coach plans, and progress monitoring.",
      version: "16.1.0",
      releaseDate: new Date("2026-01-16T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e300"),
      genre: "Nutrition",
      rating: 4,
      averageRating: 4,
      reviewCount: 1,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/7a13237e-7003-32ff-bbc7-752447e08db1/t_500x300",
      featureHighlights: [
        "Meal logging",
        "Coach plans",
        "Progress dashboard"
      ],
      downloadCount: 1,
      lastAnnouncement: "Food scan improvements are live in the latest release.",
      createdAt: new Date("2026-03-16T13:57:59.416Z"),
      updatedAt: new Date("2026-03-16T14:07:52.659Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b19"),
      name: "Nike Training Club",
      description: "Fitness platform with guided workouts, mobility sessions, wellness plans, and structured training support.",
      version: "2.1.0",
      releaseDate: new Date("2026-02-10T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e300"),
      genre: "Fitness",
      rating: 0,
      averageRating: 0,
      reviewCount: 0,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/22a0c943-55d3-315a-8e0f-2baef03ab3a3/t_500x300",
      featureHighlights: [
        "Workout plans",
        "Mobility sessions",
        "Wellness guidance"
      ],
      downloadCount: 0,
      lastAnnouncement: "New strength and recovery workout collections are now available.",
      createdAt: new Date("2026-03-16T13:57:59.417Z"),
      updatedAt: new Date("2026-03-16T19:28:23.361Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1a"),
      name: "LinkedIn",
      description: "Professional networking platform for jobs, hiring, learning resources, and career updates.",
      version: "1.4.0",
      releaseDate: new Date("2026-03-06T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b5462ed2680b590dde6861"),
      genre: "Professional Network",
      rating: 4,
      averageRating: 4,
      reviewCount: 2,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/051c505f-dc29-3303-81b2-5828c6e3b2e2/t_500x300",
      featureHighlights: [
        "Jobs",
        "Networking",
        "Learning content"
      ],
      downloadCount: 2,
      lastAnnouncement: "Profile insights and hiring recommendations were updated.",
      createdAt: new Date("2026-03-16T13:57:59.417Z"),
      updatedAt: new Date("2026-03-16T19:39:13.128Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1b"),
      name: "Canva",
      description: "Design and content creation platform for social posts, presentations, marketing visuals, and templates.",
      version: "7.3.5",
      releaseDate: new Date("2026-02-14T00:00:00.000Z"),
      category: new mongoose.Types.ObjectId("69b5462ed2680b590dde6861"),
      genre: "Design Tool",
      rating: 0,
      averageRating: 0,
      reviewCount: 0,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/fz/api/res/1.2/zND4K9_2c5PMRiYG7jg0IA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cT04MDt3PTUxMg--/https://s.yimg.com/am/60d/3f340387d639fcf1923998692a0165d7",
      featureHighlights: [
        "Templates",
        "Brand kits",
        "Quick exports"
      ],
      downloadCount: 0,
      lastAnnouncement: "Presentation templates and brand kit tools were improved.",
      createdAt: new Date("2026-03-16T13:57:59.417Z"),
      updatedAt: new Date("2026-03-16T19:28:23.378Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b85db95f80b8136358051d"),
      name: "Super Mario",
      description: "Play the original Super Mario Bros game online for FREE! 🎮 How to play. Use arrows [↑→↓←] or W-A-S-D keys to move Mario",
      version: "2.9.8.1",
      releaseDate: new Date("2026-03-16T19:48:24.961Z"),
      category: new mongoose.Types.ObjectId("69b3f27f98a733d22148e2fc"),
      genre: "Arcade",
      rating: 5,
      averageRating: 5,
      reviewCount: 1,
      visibility: "public",
      ownerId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      iconUrl: "https://s.yimg.com/zb/imgv1/cfe82064-7752-3069-bd8f-cfa0eb6d3948/t_500x300",
      featureHighlights: [
        "Boss battles",
        "Co-op mode",
        "Weapon upgrades"
      ],
      downloadCount: 1,
      lastAnnouncement: "Bugs removed and added new maps..",
      createdAt: new Date("2026-03-16T19:44:57.101Z"),
      updatedAt: new Date("2026-03-16T19:48:25.048Z"),
      __v: 0
    }
  ],
  reviews: [
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b2b"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
      rating: 5,
      comment: "Fast, reliable, and very easy to use with friends and family.",
      timestamp: new Date("2026-03-16T13:57:59.480Z"),
      createdAt: new Date("2026-03-16T13:57:59.489Z"),
      updatedAt: new Date("2026-03-16T13:57:59.489Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b2c"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
      rating: 4,
      comment: "Clean interface and stable voice calls across devices.",
      timestamp: new Date("2026-03-16T13:57:59.481Z"),
      createdAt: new Date("2026-03-16T13:57:59.489Z"),
      updatedAt: new Date("2026-03-16T13:57:59.489Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b2d"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      rating: 4,
      comment: "Stories and reels are smooth, and the app feels polished.",
      timestamp: new Date("2026-03-16T13:57:59.481Z"),
      createdAt: new Date("2026-03-16T13:57:59.489Z"),
      updatedAt: new Date("2026-03-16T13:57:59.489Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b2f"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0f"),
      rating: 4,
      comment: "Good video calling quality even on slower connections.",
      timestamp: new Date("2026-03-16T13:57:59.482Z"),
      createdAt: new Date("2026-03-16T13:57:59.489Z"),
      updatedAt: new Date("2026-03-16T13:57:59.489Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b31"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      rating: 5,
      comment: "Great graphics and smooth gameplay in team matches.",
      timestamp: new Date("2026-03-16T13:57:59.482Z"),
      createdAt: new Date("2026-03-16T13:57:59.490Z"),
      updatedAt: new Date("2026-03-16T13:57:59.490Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b32"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      rating: 4,
      comment: "The seasonal updates keep the experience fresh.",
      timestamp: new Date("2026-03-16T13:57:59.482Z"),
      createdAt: new Date("2026-03-16T13:57:59.490Z"),
      updatedAt: new Date("2026-03-16T13:57:59.490Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b34"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b13"),
      rating: 5,
      comment: "Classic action feeling with modern mission design.",
      timestamp: new Date("2026-03-16T13:57:59.483Z"),
      createdAt: new Date("2026-03-16T13:57:59.490Z"),
      updatedAt: new Date("2026-03-16T13:57:59.490Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b35"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b14"),
      rating: 4,
      comment: "Good offers and a polished beauty discovery flow.",
      timestamp: new Date("2026-03-16T13:57:59.483Z"),
      createdAt: new Date("2026-03-16T13:57:59.490Z"),
      updatedAt: new Date("2026-03-16T13:57:59.490Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b36"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b15"),
      rating: 5,
      comment: "Good collections and smooth browsing across categories.",
      timestamp: new Date("2026-03-16T13:57:59.483Z"),
      createdAt: new Date("2026-03-16T13:57:59.490Z"),
      updatedAt: new Date("2026-03-16T13:57:59.490Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b38"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b17"),
      rating: 5,
      comment: "Helpful reminders and a privacy-friendly design.",
      timestamp: new Date("2026-03-16T13:57:59.484Z"),
      createdAt: new Date("2026-03-16T13:57:59.490Z"),
      updatedAt: new Date("2026-03-16T13:57:59.490Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b39"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b18"),
      rating: 4,
      comment: "Useful health insights and a strong daily tracker.",
      timestamp: new Date("2026-03-16T13:57:59.484Z"),
      createdAt: new Date("2026-03-16T13:57:59.490Z"),
      updatedAt: new Date("2026-03-16T13:57:59.490Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b3b"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1a"),
      rating: 4,
      comment: "Professional feed and job tools are well integrated.",
      timestamp: new Date("2026-03-16T13:57:59.485Z"),
      createdAt: new Date("2026-03-16T13:57:59.491Z"),
      updatedAt: new Date("2026-03-16T13:57:59.491Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b810547a4ef916f4cc44a6"),
      userId: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      rating: 4,
      comment: "stress reliver.....man awesome game...",
      timestamp: new Date("2026-03-16T14:14:44.423Z"),
      createdAt: new Date("2026-03-16T14:14:44.432Z"),
      updatedAt: new Date("2026-03-16T14:14:44.432Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b810817a4ef916f4cc44de"),
      userId: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      rating: 2,
      comment: "has somebugs needs to be resolved..",
      timestamp: new Date("2026-03-16T14:15:29.508Z"),
      createdAt: new Date("2026-03-16T14:15:29.514Z"),
      updatedAt: new Date("2026-03-16T14:15:29.514Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b85c605f80b81363580457"),
      userId: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1a"),
      rating: 4,
      comment: "It helped me alot to find jobs and land many interview thank you linkedin team....",
      timestamp: new Date("2026-03-16T19:39:12.892Z"),
      createdAt: new Date("2026-03-16T19:39:12.897Z"),
      updatedAt: new Date("2026-03-16T19:39:12.897Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b85e105f80b81363580583"),
      userId: new mongoose.Types.ObjectId("69b85cb35f80b81363580474"),
      appId: new mongoose.Types.ObjectId("69b85db95f80b8136358051d"),
      rating: 5,
      comment: "good game very enjoying...",
      timestamp: new Date("2026-03-16T19:46:24.530Z"),
      createdAt: new Date("2026-03-16T19:46:24.532Z"),
      updatedAt: new Date("2026-03-16T19:46:24.532Z"),
      __v: 0
    }
  ],
  downloads: [
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b4f"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
      downloadDate: new Date("2026-03-16T13:57:59.562Z"),
      createdAt: new Date("2026-03-16T13:57:59.573Z"),
      updatedAt: new Date("2026-03-16T13:57:59.573Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b50"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
      downloadDate: new Date("2026-03-16T13:57:59.563Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b51"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      downloadDate: new Date("2026-03-16T13:57:59.564Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b53"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0f"),
      downloadDate: new Date("2026-03-16T13:57:59.565Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b55"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      downloadDate: new Date("2026-03-16T13:57:59.565Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b56"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      downloadDate: new Date("2026-03-16T13:57:59.566Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b58"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b13"),
      downloadDate: new Date("2026-03-16T13:57:59.566Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b59"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b14"),
      downloadDate: new Date("2026-03-16T13:57:59.567Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b5a"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b15"),
      downloadDate: new Date("2026-03-16T13:57:59.567Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b5c"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b17"),
      downloadDate: new Date("2026-03-16T13:57:59.568Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b5d"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b18"),
      downloadDate: new Date("2026-03-16T13:57:59.568Z"),
      createdAt: new Date("2026-03-16T13:57:59.574Z"),
      updatedAt: new Date("2026-03-16T13:57:59.574Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b5f"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1a"),
      downloadDate: new Date("2026-03-16T13:57:59.569Z"),
      createdAt: new Date("2026-03-16T13:57:59.575Z"),
      updatedAt: new Date("2026-03-16T13:57:59.575Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b61"),
      userId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      downloadDate: new Date("2026-03-16T13:57:59.569Z"),
      createdAt: new Date("2026-03-16T13:57:59.575Z"),
      updatedAt: new Date("2026-03-16T13:57:59.575Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b810377a4ef916f4cc4494"),
      userId: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      downloadDate: new Date("2026-03-16T14:14:15.318Z"),
      createdAt: new Date("2026-03-16T14:14:15.321Z"),
      updatedAt: new Date("2026-03-16T14:14:15.321Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b810647a4ef916f4cc44cc"),
      userId: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      downloadDate: new Date("2026-03-16T14:15:00.514Z"),
      createdAt: new Date("2026-03-16T14:15:00.515Z"),
      updatedAt: new Date("2026-03-16T14:15:00.515Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b85c305f80b81363580441"),
      userId: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
      appId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1a"),
      downloadDate: new Date("2026-03-16T19:38:24.394Z"),
      createdAt: new Date("2026-03-16T19:38:24.412Z"),
      updatedAt: new Date("2026-03-16T19:38:24.412Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b85dfb5f80b81363580572"),
      userId: new mongoose.Types.ObjectId("69b85cb35f80b81363580474"),
      appId: new mongoose.Types.ObjectId("69b85db95f80b8136358051d"),
      downloadDate: new Date("2026-03-16T19:46:03.298Z"),
      createdAt: new Date("2026-03-16T19:46:03.304Z"),
      updatedAt: new Date("2026-03-16T19:46:03.304Z"),
      __v: 0
    }
  ],
  notifications: [
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b8b"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      recipientRole: "owner",
      type: "app_downloaded",
      title: "New app download",
      message: "Asha Sharma downloaded WhatsApp.",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
      isRead: false,
      createdAt: new Date("2026-03-16T13:57:59.794Z"),
      updatedAt: new Date("2026-03-16T13:57:59.794Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b8c"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      recipientRole: "owner",
      type: "app_downloaded",
      title: "New app download",
      message: "Kiran Patel downloaded PUBG Mobile.",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      isRead: false,
      createdAt: new Date("2026-03-16T13:57:59.794Z"),
      updatedAt: new Date("2026-03-16T13:57:59.794Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b8d"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      recipientRole: "owner",
      type: "app_downloaded",
      title: "New app download",
      message: "Neha Verma downloaded Instagram.",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      isRead: false,
      createdAt: new Date("2026-03-16T13:57:59.795Z"),
      updatedAt: new Date("2026-03-16T13:57:59.795Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b8e"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      recipientRole: "user",
      type: "app_updated",
      title: "WhatsApp has a new update",
      message: "GALETI MOHAMMAD HUSSAIN published improved call stability and media sync for WhatsApp.",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0d"),
      isRead: false,
      createdAt: new Date("2026-03-16T13:57:59.795Z"),
      updatedAt: new Date("2026-03-16T13:57:59.795Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b8f"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      recipientRole: "user",
      type: "app_updated",
      title: "PUBG Mobile has a new update",
      message: "GALETI MOHAMMAD HUSSAIN released a fresh arena mode and smoother matchmaking update.",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      isRead: false,
      createdAt: new Date("2026-03-16T13:57:59.795Z"),
      updatedAt: new Date("2026-03-16T13:57:59.795Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b810377a4ef916f4cc4496"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      recipientRole: "owner",
      type: "app_downloaded",
      title: "New app download",
      message: "sudheer hussain downloaded PUBG Mobile.",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b11"),
      isRead: false,
      metadata: {
        downloadedBy: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
        downloadedByName: "sudheer hussain",
        downloadedByEmail: "sudheer@gmail.com"
      },
      createdAt: new Date("2026-03-16T14:14:15.430Z"),
      updatedAt: new Date("2026-03-16T14:14:15.430Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b810647a4ef916f4cc44ce"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      recipientRole: "owner",
      type: "app_downloaded",
      title: "New app download",
      message: "sudheer hussain downloaded Instagram.",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      isRead: false,
      metadata: {
        downloadedBy: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
        downloadedByName: "sudheer hussain",
        downloadedByEmail: "sudheer@gmail.com"
      },
      createdAt: new Date("2026-03-16T14:15:00.531Z"),
      updatedAt: new Date("2026-03-16T14:15:00.531Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b8112e7a4ef916f4cc453f"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b05"),
      recipientRole: "user",
      type: "app_updated",
      title: "Instagram has a new update",
      message: "GALETI MOHAMMAD HUSSAIN published version 14.8.5.0. bugs fixed....",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      isRead: false,
      metadata: {
        version: "14.8.5.0"
      },
      __v: 0,
      createdAt: new Date("2026-03-16T14:18:22.485Z"),
      updatedAt: new Date("2026-03-16T14:18:22.485Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b8112e7a4ef916f4cc4540"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b06"),
      recipientRole: "user",
      type: "app_updated",
      title: "Instagram has a new update",
      message: "GALETI MOHAMMAD HUSSAIN published version 14.8.5.0. bugs fixed....",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      isRead: false,
      metadata: {
        version: "14.8.5.0"
      },
      __v: 0,
      createdAt: new Date("2026-03-16T14:18:22.496Z"),
      updatedAt: new Date("2026-03-16T14:18:22.496Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b8112e7a4ef916f4cc4542"),
      recipientId: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
      recipientRole: "user",
      type: "app_updated",
      title: "Instagram has a new update",
      message: "GALETI MOHAMMAD HUSSAIN published version 14.8.5.0. bugs fixed....",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b0e"),
      isRead: false,
      metadata: {
        version: "14.8.5.0"
      },
      __v: 0,
      createdAt: new Date("2026-03-16T14:18:22.501Z"),
      updatedAt: new Date("2026-03-16T14:18:22.501Z")
    },
    {
      _id: new mongoose.Types.ObjectId("69b85c305f80b81363580443"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      recipientRole: "owner",
      type: "app_downloaded",
      title: "New app download",
      message: "sudheer hussain downloaded LinkedIn.",
      relatedAppId: new mongoose.Types.ObjectId("69b80c6787e7a5fd784c0b1a"),
      isRead: false,
      metadata: {
        downloadedBy: new mongoose.Types.ObjectId("69b810087a4ef916f4cc441e"),
        downloadedByName: "sudheer hussain",
        downloadedByEmail: "sudheer@gmail.com"
      },
      createdAt: new Date("2026-03-16T19:38:24.450Z"),
      updatedAt: new Date("2026-03-16T19:38:24.450Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b85dfb5f80b81363580574"),
      recipientId: new mongoose.Types.ObjectId("69b80c6587e7a5fd784c0b04"),
      recipientRole: "owner",
      type: "app_downloaded",
      title: "New app download",
      message: "Dummyuser downloaded Super Mario.",
      relatedAppId: new mongoose.Types.ObjectId("69b85db95f80b8136358051d"),
      isRead: false,
      metadata: {
        downloadedBy: new mongoose.Types.ObjectId("69b85cb35f80b81363580474"),
        downloadedByName: "Dummyuser",
        downloadedByEmail: "dummy@gmail.com"
      },
      createdAt: new Date("2026-03-16T19:46:03.327Z"),
      updatedAt: new Date("2026-03-16T19:46:03.327Z"),
      __v: 0
    },
    {
      _id: new mongoose.Types.ObjectId("69b85e895f80b813635805eb"),
      recipientId: new mongoose.Types.ObjectId("69b85cb35f80b81363580474"),
      recipientRole: "owner",
      type: "app_updated",
      title: "Super Mario has a new update",
      message: "GALETI MOHAMMAD HUSSAIN published version 2.9.8.1. Bugs removed and added new maps..",
      relatedAppId: new mongoose.Types.ObjectId("69b85db95f80b8136358051d"),
      isRead: false,
      metadata: {
        version: "2.9.8.1"
      },
      __v: 0,
      createdAt: new Date("2026-03-16T19:48:25.362Z"),
      updatedAt: new Date("2026-03-16T19:48:25.362Z")
    }
  ],
};

async function seed() {
  await connectDb();

  await Promise.all([
    Notification.deleteMany({}),
    Download.deleteMany({}),
    Review.deleteMany({}),
    Application.deleteMany({}),
    User.deleteMany({}),
    Category.deleteMany({}),
  ]);

  if (snapshot.categories.length) {
    await Category.collection.insertMany(snapshot.categories);
  }

  if (snapshot.users.length) {
    await User.collection.insertMany(snapshot.users);
  }

  if (snapshot.applications.length) {
    await Application.collection.insertMany(snapshot.applications);
  }

  if (snapshot.reviews.length) {
    await Review.collection.insertMany(snapshot.reviews);
  }

  if (snapshot.downloads.length) {
    await Download.collection.insertMany(snapshot.downloads);
  }

  if (snapshot.notifications.length) {
    await Notification.collection.insertMany(snapshot.notifications);
  }

  console.log('Seed completed successfully from current MongoDB snapshot.');
  console.log('Snapshot exported at:', snapshot.exportedAt.toISOString());
  console.log('Categories:', snapshot.categories.length);
  console.log('Users:', snapshot.users.length);
  console.log('Applications:', snapshot.applications.length);
  console.log('Reviews:', snapshot.reviews.length);
  console.log('Downloads:', snapshot.downloads.length);
  console.log('Notifications:', snapshot.notifications.length);

  await disconnectDb();
}

seed().catch(async (error) => {
  console.error('Seed failed', error);
  await disconnectDb();
  process.exit(1);
});
