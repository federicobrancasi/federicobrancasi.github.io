import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from '@/constants';
import Index from "./pages/Index";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import SimpleTest from "./pages/SimpleTest";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Index />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.RESUME} element={<Resume />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path={ROUTES.MOVIES} element={<Movies />} />
          <Route path="/simple" element={<SimpleTest />} />
          <Route path="/test" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
