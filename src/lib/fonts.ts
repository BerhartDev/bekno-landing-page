import { Inter, Roboto, DM_Sans } from "next/font/google";

// Configuração das fontes Google
export const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const roboto = Roboto({ 
  weight: ["400", "500", "700"], 
  subsets: ["latin"], 
  variable: "--font-roboto" 
});

export const dmSans = DM_Sans({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-dm-sans" 
});

// Classes CSS para aplicação das fontes
export const fontClasses = {
  // Fontes para títulos (Roboto)
  heading: "font-heading",
  
  // Fontes para texto secundário (DM Sans)
  body: "font-body",
  
  // Fontes padrão (Inter)
  sans: "font-sans",
  
  // Combinação de classes comuns
  title: "font-bold font-heading",
  subtitle: "font-medium font-body",
  text: "font-normal font-body",
};

// Variáveis CSS para uso em componentes
export const fontVariables = `${inter.variable} ${roboto.variable} ${dmSans.variable}`;

// Configuração das fontes para Tailwind CSS (definida diretamente no tailwind.config.js)
// Esta configuração está duplicada para evitar problemas de importação
