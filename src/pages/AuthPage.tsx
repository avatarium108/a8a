import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const AuthPage = () => {
  const { signIn, signUp, signInWithGoogle, signInWithGitHub, user, loading } = useAuth();
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (user && !loading) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      toast({
        title: "Помилка",
        description: t.auth.messages.fillRequired,
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    const { error } = await signIn(loginData.email, loginData.password);
    
    if (error) {
      let message = t.auth.messages.invalidCredentials;
      if (error.message === 'Invalid login credentials') {
        message = t.auth.messages.invalidCredentials;
      }
      
      toast({
        title: "Помилка входу",
        description: message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Успішно!",
        description: t.auth.messages.loginSuccess
      });
      navigate('/dashboard');
    }
    
    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signupData.fullName || !signupData.email || !signupData.password || !signupData.confirmPassword) {
      toast({
        title: "Помилка",
        description: t.auth.messages.fillRequired,
        variant: "destructive"
      });
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Помилка",
        description: t.auth.messages.passwordMismatch,
        variant: "destructive"
      });
      return;
    }

    if (signupData.password.length < 6) {
      toast({
        title: "Помилка",
        description: t.auth.messages.weakPassword,
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    const { error } = await signUp(signupData.email, signupData.password, signupData.fullName);
    
    if (error) {
      let message = error.message;
      if (error.message.includes('User already registered')) {
        message = t.auth.messages.userExists;
      }
      
      toast({
        title: "Помилка реєстрації",
        description: message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Успішно!",
        description: t.auth.messages.signupSuccess
      });
      // Don't navigate immediately, let email verification happen
    }
    
    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const { error } = await signInWithGoogle();
    
    if (error) {
      toast({
        title: "Помилка",
        description: "Не вдалося увійти через Google",
        variant: "destructive"
      });
      setIsLoading(false);
    }
    // Don't set loading to false here - the redirect will happen
  };

  const handleGitHubLogin = async () => {
    setIsLoading(true);
    const { error } = await signInWithGitHub();
    
    if (error) {
      toast({
        title: "Помилка", 
        description: "Не вдалося увійти через GitHub",
        variant: "destructive"
      });
      setIsLoading(false);
    }
    // Don't set loading to false here - the redirect will happen
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gradient-ukraine">para.tech</CardTitle>
          <CardDescription>
            Автентифікація для доступу до особистого кабінету
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вхід</TabsTrigger>
              <TabsTrigger value="signup">Реєстрація</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <div className="space-y-4">
                {/* Social Login */}
                <div className="space-y-3">
                  <Button
                    onClick={handleGoogleLogin}
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    disabled={isLoading}
                  >
                    <Mail className="h-4 w-4" />
                    Увійти через Google
                  </Button>
                  
                  <Button
                    onClick={handleGitHubLogin}
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    disabled={isLoading}
                  >
                    <Github className="h-4 w-4" />
                    Увійти через GitHub
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      або
                    </span>
                  </div>
                </div>

                {/* Email/Password Login */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Пароль</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full btn-ukraine ukraine-gradient"
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Увійти
                  </Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Повне ім'я</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    value={signupData.fullName}
                    onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                    placeholder="Іван Петренко"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Пароль</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm">Підтвердити пароль</Label>
                  <Input
                    id="signup-confirm"
                    type="password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-ukraine ukraine-gradient"
                  disabled={isLoading}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Зареєструватись
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;