import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const AIManagerChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '👋 Привіт! Я ваш AI-менеджер з автоматизації та штучного інтелекту. Розкажіть, які бізнес-процеси ви хочете автоматизувати?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('ціна') || message.includes('вартість') || message.includes('бюджет')) {
      return '💰 Наші пакети починаються від $500/місяць. Це залежить від складності автоматизації. Хочете обговорити ваш конкретний проєкт?';
    }
    
    if (message.includes('crm') || message.includes('црм') || message.includes('клієнт')) {
      return '🔗 Ми інтегруємо CRM з чат-ботами, email-маркетингом та аналітикою. ROI зазвичай +200-400%. Який CRM ви використовуєте?';
    }
    
    if (message.includes('бот') || message.includes('чат')) {
      return '🤖 Створюємо розумні чат-боти для Telegram, WhatsApp, Instagram. Вони можуть приймати замовлення, консультувати, збирати контакти. Для якої платформи потрібен бот?';
    }
    
    if (message.includes('ai') || message.includes('ші') || message.includes('штучний інтелект')) {
      return '🧠 Впроваджуємо AI для аналізу даних, прогнозування, автоматизації рішень. GPT для контенту, комп\'ютерний зір для якості. Що саме цікавить?';
    }
    
    if (message.includes('автоматизац') || message.includes('процес')) {
      return '⚙️ Автоматизуємо: продажі, HR, фінанси, маркетинг, складську логістику. Який відділ найбільше потребує оптимізації?';
    }
    
    if (message.includes('веб') || message.includes('сайт') || message.includes('розробка')) {
      return '💻 Розробляємо веб-додатки з AI, дашборди аналітики, e-commerce з автоматизацією. Потрібен новий проєкт чи модернізація існуючого?';
    }
    
    if (message.includes('iot') || message.includes('датчик') || message.includes('сенсор')) {
      return '📡 Підключаємо IoT-датчики до аналітики, створюємо розумні системи моніторингу. Яку галузь потрібно контролювати?';
    }
    
    if (message.includes('консультац') || message.includes('допомог')) {
      return '🎯 Проводимо безкоштовну консультацію для аналізу ваших процесів та ROI прогнозу. Коли зручно зв\'язатися?';
    }
    
    return '🤔 Цікаво! Розкажіть більше деталей про ваш бізнес-процес. Або оберіть тему: автоматизація продажів, AI-аналітика, чат-боти, веб-розробка, IoT рішення.';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getAIResponse(userMessage.content),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
        <div className="absolute -top-2 -left-2">
          <Badge variant="destructive" className="animate-pulse">
            AI
          </Badge>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 shadow-2xl border-primary/20">
        <CardHeader className="pb-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-sm">AI-Менеджер</CardTitle>
              <Badge variant="secondary" className="text-xs">
                Online
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 flex flex-col h-80">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.type === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <span>{message.content}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Напишіть ваше питання..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIManagerChatbot;