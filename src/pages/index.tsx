import SearchChatbotWidget from "@/components/SearchChatbot";
import { Environment, WidgetsProvider } from "@sitecore-search/react";

export default function Home() {
  const env = process.env.SEARCH_ENV as Environment;
  const customerKey = process.env.SEARCH_CUSTOMER_KEY;
  const searchApiKey = process.env.SEARCH_API_KEY;
  const discoverDomainId = process.env.SEARCH_DOMAIN_ID;
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-100 to-cyan-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Your Sitecore Search AI Assistant for Instant Answers!
        </h1>

        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-purple-200">
          <p className="text-lg text-gray-700 mb-4">
            <p>
              Welcome to your personal AI-powered assistant! Whether you need
              quick answers or in-depth insights, our chatbot is here to help.
            </p>

            <b className="mt-4 mb-2 block">💡 How It Works:</b>
            <ul>
              <li>
                ✅ Click the chatbot icon at the bottom right to start chatting.
              </li>
              <li>✅ Get the most relevant answer instantly.</li>
              <li>✅ Explore suggested questions to dive deeper.</li>
              <li>✅ Type your own queries for more insights!</li>
            </ul>

            <p className="mt-4">
              Stay productive, get informed, and experience seamless
              assistance—all in one place! ✨
            </p>
          </p>
        </div>
        <WidgetsProvider
          discoverDomainId={discoverDomainId}
          env={env}
          customerKey={customerKey}
          apiKey={searchApiKey}
        >
          <SearchChatbotWidget rfkId={"rfkid_qa"} />
        </WidgetsProvider>
      </main>
    </div>
  );
}
