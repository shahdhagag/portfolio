// ============================================================================
// PORTFOLIO DATA — Shahd Ahmed Youssef — Flutter Developer
// ============================================================================

export const personalInfo = {
  name: "Shahd Ahmed Youssef",
  role: "Flutter Developer | Mobile Application Specialist",
  email: "shahdhagag546@gmail.com",
  phone: "(+2) 01276028781",
  location: "Cairo, Egypt",
  github: "https://github.com/shahdhagag",
  linkedin: "https://www.linkedin.com/in/shahd-ahmed-87a716296/",
  bio: "Flutter Developer and Software Engineering graduate (Class of 2025) with strong hands-on experience building modern, scalable mobile applications using Flutter and Dart. Skilled in BLoC, Cubit, Provider, REST API integration, and Clean Architecture.",
  resumeUrl: "/resume.pdf",
  openToRelocation: true,
};

// ============================================================================
// NAVIGATION LINKS
// ============================================================================

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

// ============================================================================
// SKILLS
// ============================================================================

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: "mobile" | "state" | "networking" | "tools";
}

export const skills: Skill[] = [
  // Core / Mobile
  { name: "Flutter", icon: "SiFlutter", level: 95, category: "mobile" },
  { name: "Dart", icon: "SiDart", level: 90, category: "mobile" },
  { name: "Clean Architecture", icon: "🏗️", level: 88, category: "mobile" },

  // State Management
  { name: "BLoC", icon: "📦", level: 90, category: "state" },
  { name: "Cubit", icon: "📦", level: 90, category: "state" },
  { name: "Provider", icon: "📦", level: 85, category: "state" },

  // Networking
  { name: "Dio", icon: "🌐", level: 88, category: "networking" },
  { name: "REST APIs", icon: "🔗", level: 90, category: "networking" },

  // Tools
  { name: "Git", icon: "SiGit", level: 85, category: "tools" },
  { name: "GitHub", icon: "SiGithub", level: 85, category: "tools" },
  { name: "Android Studio", icon: "SiAndroidstudio", level: 90, category: "tools" },
  { name: "VS Code", icon: "SiVisualstudiocode", level: 90, category: "tools" },
  { name: "Postman", icon: "SiPostman", level: 82, category: "tools" },
  { name: "Figma", icon: "SiFigma", level: 78, category: "tools" },
];

// ============================================================================
// PROJECTS
// ============================================================================

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  features: string[];
  github?: string;
  repoName?: string; // GitHub repo name for fetching screenshots
  coverImage?: string; // Cover/thumbnail image for project card
  screenshots?: string[]; // Hardcoded screenshot URLs (e.g. from GitHub user-attachments)
  demoVideo?: string; // Link to video demo
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Evently – Event Management",
    slug: "evently",
    description:
      "A modern, responsive Flutter app for managing events with Firebase Auth, Firestore, localization, dark/light theming, and onboarding.",
    longDescription:
      "Evently is a full-featured Flutter application for creating, editing, deleting, favoriting, and searching events. It integrates Firebase Authentication and Firestore for user management and event storage, supports multi-language localization (English & Arabic), dark/light theming, onboarding screens, and smooth UI/UX interactions with responsive design.",
    image: "/images/project-placeholder.png",
    coverImage: "/images/evently-cover.png",
    tags: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Provider",
      "GoRouter",
      "easy_localization",
      "flutter_screenutil",
    ],
    features: [
      "Create, edit, and delete events with title, description, date, time & image",
      "Mark/unmark events as favorite with real-time search",
      "Firebase Authentication with Google Sign-In",
      "Cloud Firestore for event and user data storage",
      "Multi-language support: English & Arabic",
      "Dark mode & light mode with persistent preferences",
      "Guided onboarding screens for first-time users",
      "Responsive design with flutter_screenutil",
      "Swipeable list items with flutter_slidable",
      "Custom splash screen and app icons",
      "Clean and scalable project structure",
    ],
    github: "https://github.com/shahdhagag/Evently",
    repoName: "Evently",
    demoVideo: "https://drive.google.com/file/d/1PZPBzl-17GCMEp4t2zQhtKdb6QwojHom/view?usp=sharing",
    screenshots: [
      // Light Mode
      "https://github.com/user-attachments/assets/13a2e548-0778-45ca-a14e-77f06212daeb",
      "https://github.com/user-attachments/assets/69d107fb-dda1-4b41-badd-35227ba6b6dc",
      "https://github.com/user-attachments/assets/278c9d94-b57d-4964-bd49-b431f43186c1",
      "https://github.com/user-attachments/assets/2dca45de-2e2d-441c-87dd-a5499e984f47",
      "https://github.com/user-attachments/assets/e0836e73-f2e1-4e6e-8678-215c4ddab969",
      "https://github.com/user-attachments/assets/12da3976-c59c-41c2-8669-12b260c021bf",
      "https://github.com/user-attachments/assets/bec5ad4d-c4bb-49b3-ba05-4ce3cf14b374",
      "https://github.com/user-attachments/assets/f90801a0-2acb-435b-9908-576b676d28f0",
      "https://github.com/user-attachments/assets/67330a11-390d-4812-b086-e8d3b6738206",
      "https://github.com/user-attachments/assets/3422ec75-77d4-4e64-a059-6f33c26f9868",
      "https://github.com/user-attachments/assets/33984c7b-2c22-4bf8-8bc3-46ae4835a8da",
      "https://github.com/user-attachments/assets/c20c7750-a2cc-4eb4-9308-c950cbffc20c",
      "https://github.com/user-attachments/assets/ccf2ccf4-ae94-4f96-9992-c8ddd4f51136",
      "https://github.com/user-attachments/assets/15504500-58b9-48d6-9095-9fd1bd902752",
      "https://github.com/user-attachments/assets/ce385f56-6472-4439-8b5e-b41f6a9bf737",
      // Dark Mode
      "https://github.com/user-attachments/assets/73ef0f69-0a72-47ac-ad87-397694d8b7cf",
      "https://github.com/user-attachments/assets/80af2560-e27b-4716-9efc-5e10a7d6c942",
      "https://github.com/user-attachments/assets/537c9199-4d90-4acb-b4a6-1d39d5bc2e80",
      "https://github.com/user-attachments/assets/3ab64055-580c-42ef-ac77-d8ea2167b15b",
      "https://github.com/user-attachments/assets/337684f7-1567-434d-9426-28c5a54c261e",
      "https://github.com/user-attachments/assets/441669ec-3786-4fd7-a023-cfce56e4ba31",
      "https://github.com/user-attachments/assets/aa3fd79c-dd36-4552-94b6-dfcfde661aef",
      "https://github.com/user-attachments/assets/b29a1b11-1fd9-4ff8-a794-903fecc2955d",
      "https://github.com/user-attachments/assets/b45eddcf-5b82-4b55-9ac9-6ea3f729f8c7",
      "https://github.com/user-attachments/assets/3fc0a533-5158-4e2f-a6f1-a1fe33076c0e",
      "https://github.com/user-attachments/assets/48c274f1-6f50-4352-baf6-aa28911dc542",
      "https://github.com/user-attachments/assets/30278b95-b4f8-4370-aff1-2cb4870180d6",
      "https://github.com/user-attachments/assets/e9718006-b501-4a31-a574-a95bbca4560c",
    ],
    liveUrl: "",
    featured: true,
  },
  {
    title: "Hungry App – Food Delivery",
    slug: "hungry-app",
    description:
      "A Flutter food app with user authentication, cart & order management, guest mode, and REST API integration using Dio and Shared Preferences.",
    longDescription:
      "Huungry? Yes, Let's Eat! A Flutter food app built to practice REST API integration. It features real-world functionality like user authentication (login, signup, auto-login), token-based auth, cart management with checkout, order history, profile management, and a guest mode with limited access. Built using Dio for API calls, Shared Preferences for local storage, and tested with Postman.",
    image: "/images/project-placeholder.png",
    coverImage: "/images/hungry-cover.png",
    tags: ["Flutter", "Dart", "Dio", "REST API", "Shared Preferences", "Skeletonizer"],
    features: [
      "User Authentication: Login, Signup, Logout, Auto-login",
      "Token-based Authentication",
      "Profile View & Update",
      "Product Fetching & Display with search bar",
      "Cart Screen with Checkout button",
      "Order History Screen",
      "Guest Mode with limited access and login prompts",
      "Responsive UI with reusable widgets",
      "Clean and scalable architecture",
    ],
    screenshots: [
      "https://github.com/user-attachments/assets/173838e2-f9dd-4200-a2c5-9f5b8ff6ab35",
      "https://github.com/user-attachments/assets/be89e813-ee69-4785-9f99-9f97e114eaa0",
      "https://github.com/user-attachments/assets/3c0b0638-082a-42e0-87c3-9aaad3d8549f",
      "https://github.com/user-attachments/assets/8705c07a-652d-43c7-91b3-5c370bdf872c",
      "https://github.com/user-attachments/assets/6a6bc2d2-4c0c-4725-b62b-0b450f196f92",
      "https://github.com/user-attachments/assets/ab6c6327-2fbb-43ea-9243-7ea1b1236160",
      "https://github.com/user-attachments/assets/4bdb11c2-ac8e-46e3-82bc-b3a13bb15e0d",
      "https://github.com/user-attachments/assets/6e5d8213-fbab-42c8-878e-be022ccd9b16",
      "https://github.com/user-attachments/assets/6746ee7a-5d80-47dd-873d-7039ee558f0d",
      "https://github.com/user-attachments/assets/2ac67798-80a7-4c34-94e5-f670ab4f207f",
      "https://github.com/user-attachments/assets/ef33fc37-f729-43dd-b8f8-f4ce6c9bc699",
      "https://github.com/user-attachments/assets/4cfc0d23-858b-40df-a321-160a85d85af0",
    ],
    github: "https://github.com/shahdhagag/huungry-app",
    repoName: "huungry-app",
    liveUrl: "",
    featured: true,
  },
  {
    title: "Open Fashion – E-Commerce",
    slug: "open-fashion",
    description:
      "A Flutter e-commerce app inspired by a modern fashion UI design, featuring clean architecture, reusable widgets, and a smooth checkout experience.",
    longDescription:
      "Open Fashion is a Flutter-based e-commerce application inspired by a modern fashion UI design. The app focuses on clean architecture, reusable widgets, and a smooth checkout experience. It demonstrates strong UI skills with pixel-perfect implementation from Figma, navigation handling using GoRouter, and features like product browsing, cart management with quantity control, shipping address selection, payment method selection, and a complete checkout flow with payment success dialog.",
    image: "/images/project-placeholder.png",
    coverImage: "/images/fashion-cover.png",
    tags: ["Flutter", "Dart", "GoRouter", "flutter_svg", "flutter_credit_card", "Figma"],
    features: [
      "Home screen with featured products",
      "Product details & cart management",
      "Quantity control (add/remove)",
      "Shipping address selection",
      "Payment method selection with credit card UI",
      "Complete checkout flow",
      "Payment success dialog",
      "Reusable and scalable widgets",
      "Pixel-perfect UI from Figma design",
    ],
    screenshots: [
      "https://github.com/user-attachments/assets/c7b8a567-e85b-4acc-bf8a-078ffc953e14",
      "https://github.com/user-attachments/assets/93996a65-44a9-4989-a27f-dd04e10ca7a7",
      "https://github.com/user-attachments/assets/9c0cab32-867e-4538-a352-c3e8ee2c591a",
      "https://github.com/user-attachments/assets/5839cc51-e282-4714-a566-75d9e9b2bb97",
      "https://github.com/user-attachments/assets/c28c2026-c1f4-41bf-8d6d-0f8be4599cd6",
      "https://github.com/user-attachments/assets/cdec0e3f-3398-4964-9bfd-5f20268399cf",
      "https://github.com/user-attachments/assets/9df40a18-e596-448a-96ec-60f9303cd2eb",
      "https://github.com/user-attachments/assets/9b38437c-3552-4090-a0a4-b35c473254a6",
      "https://github.com/user-attachments/assets/83b5ca76-69d8-4f86-852a-083e6983fc9d",
      "https://github.com/user-attachments/assets/e55acb51-b375-4dfd-8df1-df602d86a89c",
    ],
    github: "https://github.com/shahdhagag/open_fashion",
    repoName: "open_fashion",
    liveUrl: "",
    featured: true,
  },
  {
    title: "Islami App",
    slug: "islami-app",
    description:
      "A Flutter application providing essential Islamic features — Quran reading with search, Hadith browsing, digital Sebha, prayer times, and Azkar with smooth navigation and clean UI.",
    longDescription:
      "Islami is a full-featured Flutter application that provides essential Islamic features such as Quran reading with surah details and search, Hadith browsing with details, a digital Sebha with Tasbeeh counter, prayer times display, and morning/evening Azkar. The app focuses on clean UI, smooth navigation using GoRouter, and simple local data handling with SharedPreferences for saving the last read surah.",
    image: "/images/project-placeholder.png",
    coverImage: "/images/islami-cover.png",
    tags: ["Flutter", "Dart", "GoRouter", "SharedPreferences", "Google Fonts", "carousel_slider", "introduction_screen"],
    features: [
      "List of Quran Surahs with surah details screen",
      "Search functionality for Quran",
      "Save last opened Surah using SharedPreferences",
      "Browse Hadith collection with details",
      "Digital Sebha with Tasbeeh counter",
      "Prayer times display with next prayer countdown",
      "Morning and Evening Azkar",
      "Splash Screen and Introduction/Onboarding",
      "Smooth navigation using GoRouter",
      "Clean UI with Google Fonts",
      "Local assets handling",
    ],
    screenshots: [
      "https://github.com/user-attachments/assets/38baff4a-48bd-4df7-84f9-5913bea997d7",
      "https://github.com/user-attachments/assets/70920e4b-e7fa-4fd9-9fc4-502125d7accb",
      "https://github.com/user-attachments/assets/f5ca6584-5898-4498-8866-5568f9a7d400",
      "https://github.com/user-attachments/assets/f38d3ab2-e13b-411a-bb01-87a731bea164",
      "https://github.com/user-attachments/assets/1899e8a5-9862-425e-abe0-d5ca967957b0",
      "https://github.com/user-attachments/assets/5a773577-3fc9-4ef7-b2ab-288a02215501",
      "https://github.com/user-attachments/assets/8d0428fc-b443-41f3-bac0-1f20a14bad16",
      "https://github.com/user-attachments/assets/58ffc3e7-d609-49ea-915f-ed3ddef43be1",
      "https://github.com/user-attachments/assets/76783ce2-d10d-417e-9b49-e445d091e6a1",
      "https://github.com/user-attachments/assets/293b1ee9-103c-47b1-9eef-0fdd8c3c73db",
    ],
    github: "https://github.com/shahdhagag/islami_app",
    repoName: "islami_app",
    liveUrl: "",
    featured: true,
  },
  {
    title: "Movie App – Movie Discovery & Tracking",
    slug: "movie-app",
    description:
      "A cross-platform mobile app built with Flutter that allows users to browse, search, and discover movies with Firebase Auth, Firestore, and Clean Architecture.",
    longDescription:
      "Movie App is a full-featured mobile application for movie enthusiasts, built using Flutter and following Clean Architecture principles for scalable, maintainable, and testable code. Users can sign up and log in securely using Firebase Authentication (Email/Password), browse trending and genre-specific movies (Action, Adventure, Animation, and more), search for titles, view detailed movie information, and manage personal watchlists and favorites — all persisted in real-time with Cloud Firestore. The app features a beautiful dark-themed UI with an onboarding flow, a featured movies carousel, genre-based browsing, and user profile management.",
    image: "/images/project-placeholder.png",
    coverImage: "/images/movie-cover.png",
    tags: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "BLoC",
      "Clean Architecture",
      "Dio",
      "get_it",
      "go_router",
    ],
    features: [
      "Authentication — Sign up, log in, forgot password, and session management via Firebase Auth",
      "Home Screen — Featured movies carousel with auto-play, genre-categorized movie sections",
      "Search — Find movies by title with instant results",
      "Movie Details — Detailed view with cover image, rating, year, genres, and summary",
      "Watchlist & Favorites — Save movies to personal lists, persisted in Cloud Firestore",
      "User Profile — View and edit profile, manage settings",
      "Onboarding — Multi-step onboarding flow for first-time users",
      "Responsive Design — Adaptive layout using flutter_screenutil",
      "Clean Architecture with Presentation → Domain → Data layers",
      "Dependency Injection with get_it + injectable",
      "Functional error handling with dartz (Either pattern)",
    ],
    github: "https://github.com/shahdhagag/movie-app",
    repoName: "movie-app",
    liveUrl: "",
    featured: true,
  },
  {
    title: "FlashNews – News App",
    slug: "news-app",
    description:
      "A modern, high-performance Flutter news app delivering real-time headlines with offline-first caching, multi-language support, smart search, and Clean Architecture.",
    longDescription:
      "FlashNews is a modern, high-performance Flutter news application that delivers real-time headlines from around the world. Built with scalability, offline-first caching using Hive Database, and Clean Architecture principles, the app provides a seamless reading experience with multi-language support (Arabic & English), dynamic theming, skeleton loading shimmer UI, and WebView for full article browsing.",
    image: "/images/project-placeholder.png",
    coverImage: "/images/news-cover.png",
    tags: ["Flutter", "Dart", "BLoC", "Dio", "Hive", "GoRouter", "easy_localization", "Clean Architecture"],
    features: [
      "Real-time breaking news powered by NewsAPI across 6 categories",
      "Offline-first support using Hive Database with remote-first, local-fallback strategy",
      "Smart debounced search — works online and offline",
      "Arabic & English localization with automatic RTL/LTR layout",
      "Light & Dark themes with custom splash screen",
      "Skeleton loading shimmer UI with Skeletonizer",
      "Pull-to-refresh for instant feed updates",
      "WebView support for full article browsing",
      "Dependency Injection with Injectable + GetIt",
      "Responsive design with ScreenUtil",
      "BLoC + Clean Architecture",
    ],
    screenshots: [
      "https://github.com/user-attachments/assets/e72a2ef7-9c32-4287-9aac-bf200eb21066",
      "https://github.com/user-attachments/assets/ae9a4564-f13c-442b-8529-5d9e83371f79",
      "https://github.com/user-attachments/assets/62e540ab-f40f-4ea0-a219-8f08fb02514f",
      "https://github.com/user-attachments/assets/aa066513-b0bc-412f-bf31-92a862255b63",
      "https://github.com/user-attachments/assets/1a8c86cb-eb44-4587-a74e-e2c075246243",
      "https://github.com/user-attachments/assets/ef767a09-33b1-4c7f-8518-e71ba772bbea",
    ],
    github: "https://github.com/shahdhagag/FlashNews",
    repoName: "FlashNews",
    liveUrl: "",
    featured: true,
  },

];

// ============================================================================
// EDUCATION
// ============================================================================

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa?: string;
  description?: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    institution: "Sadat Academy for Management Sciences",
    degree: "B.Sc. in Software Engineering",
    duration: "2021 – June 2025",
    cgpa: "3.7 / 4.0",
    description:
      "Focused on software engineering principles, mobile application development, and modern software architecture patterns.",
    highlights: [
      "Graduated with distinction — CGPA 3.7 / 4.0",
      "Specialized in mobile development and software architecture",
      "Completed capstone project in Flutter-based mobile application",
      "Active member of the software development community",
    ],
  },
];
