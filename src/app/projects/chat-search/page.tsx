import ChatLayout from "@/components/ChatLayout/ChatLayout";
import { ThemeProviderWrapper } from "../../../utils/DardThemeContext";
export default function page() {
  return (
    <div>
        <ThemeProviderWrapper>
        <ChatLayout />
        </ThemeProviderWrapper>
    </div>
  )
}
