import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import AboutIllustration from '@/components/AboutIllustration';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-bekno-black text-bekno-white min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">BEKNO</h1>
          <p className="text-xl md:text-2xl text-bekno-gray-light mb-8">
            Soluções Digitais para o Seu Negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollButton 
              sectionId="contact"
              className="btn-primary"
            >
              Solicitar Orçamento
            </ScrollButton>
            <ScrollButton 
              sectionId="plans"
              className="btn-secondary"
            >
              Ver Planos
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre a BEKNO</h2>
              <p className="text-lg text-gray-600 mb-6">
                A BEKNO é uma empresa especializada em desenvolvimento de software e soluções digitais.
                Nossa missão é ajudar empresas a crescer através da tecnologia, oferecendo soluções
                personalizadas e de alta qualidade.
              </p>
              <p className="text-lg text-gray-600">
                Com uma equipe experiente e apaixonada por tecnologia, entregamos resultados
                excepcionais que impulsionam o sucesso dos nossos clientes.
              </p>
            </div>
            <div className="relative">
              <AboutIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-bekno-bg-light py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-bekno-black rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Presença Online</h3>
              <p className="text-bekno-gray">
                Desenvolvimento de websites profissionais e responsivos que representam sua marca.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-bekno-black rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comunicação e Atendimento</h3>
              <p className="text-bekno-gray">
                Sistemas de atendimento ao cliente e comunicação eficiente com seu público.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-bekno-black rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Marketing Digital</h3>
              <p className="text-bekno-gray">
                Estratégias de marketing digital para aumentar sua visibilidade e alcance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="bg-bekno-black text-bekno-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Nossos Planos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-bekno-white p-8 rounded-lg hover:bg-bekno-white hover:text-bekno-black transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">Essencial</h3>
              <ul className="space-y-4 mb-8">
                <li>Website Responsivo</li>
                <li>5 Páginas</li>
                <li>Formulário de Contato</li>
                <li>SEO Básico</li>
              </ul>
              <ScrollButton 
                sectionId="contact"
                className="btn-primary w-full"
              >
                Solicitar este plano
              </ScrollButton>
            </div>
            <div className="border border-bekno-white p-8 rounded-lg hover:bg-bekno-white hover:text-bekno-black transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">Avançado</h3>
              <ul className="space-y-4 mb-8">
                <li>Website Responsivo</li>
                <li>10 Páginas</li>
                <li>Blog Integrado</li>
                <li>SEO Avançado</li>
                <li>Analytics</li>
              </ul>
              <ScrollButton 
                sectionId="contact"
                className="btn-primary w-full"
              >
                Solicitar este plano
              </ScrollButton>
            </div>
            <div className="border border-bekno-white p-8 rounded-lg hover:bg-bekno-white hover:text-bekno-black transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <ul className="space-y-4 mb-8">
                <li>Website Responsivo</li>
                <li>Páginas Ilimitadas</li>
                <li>E-commerce</li>
                <li>SEO Premium</li>
                <li>Marketing Digital</li>
              </ul>
              <ScrollButton 
                sectionId="contact"
                className="btn-primary w-full"
              >
                Solicitar este plano
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Portfólio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items will be added here */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-bekno-bg-light py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <svg className="w-8 h-8 text-bekno-gray mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 1.905 1.5 1.905 2.021 0 1.49-1.254 2.381-2.937 2.381-1.249 0-2.225-.388-2.999-1.001zM17 13.011c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-1.905-1.5-1.905-2.021 0-1.49 1.254-2.381 2.937-2.381 1.249 0 2.225.388 2.999 1.001z"/>
              </svg>
              <p className="text-bekno-gray mb-4">
                "A BEKNO transformou completamente nossa presença online. O resultado superou nossas expectativas!"
              </p>
              <p className="font-bold">João Silva</p>
              <p className="text-bekno-gray-light">CEO, Tech Solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <svg className="w-8 h-8 text-bekno-gray mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 1.905 1.5 1.905 2.021 0 1.49-1.254 2.381-2.937 2.381-1.249 0-2.225-.388-2.999-1.001zM17 13.011c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-1.905-1.5-1.905-2.021 0-1.49 1.254-2.381 2.937-2.381 1.249 0 2.225.388 2.999 1.001z"/>
              </svg>
              <p className="text-bekno-gray mb-4">
                "Profissionais extremamente competentes e atenciosos. Recomendo fortemente!"
              </p>
              <p className="font-bold">Maria Santos</p>
              <p className="text-bekno-gray-light">Diretora de Marketing, Fashion Store</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <svg className="w-8 h-8 text-bekno-gray mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 1.905 1.5 1.905 2.021 0 1.49-1.254 2.381-2.937 2.381-1.249 0-2.225-.388-2.999-1.001zM17 13.011c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-1.905-1.5-1.905-2.021 0-1.49 1.254-2.381 2.937-2.381 1.249 0 2.225.388 2.999 1.001z"/>
              </svg>
              <p className="text-bekno-gray mb-4">
                "Excelente trabalho no desenvolvimento do nosso e-commerce. Resultados impressionantes!"
              </p>
              <p className="font-bold">Pedro Oliveira</p>
              <p className="text-bekno-gray-light">Proprietário, Digital Shop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-bekno-black text-bekno-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@bekno.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
                />
              </div>
              <div>
                <label htmlFor="business" className="block mb-2">Negócio</label>
                <input
                  type="text"
                  id="business"
                  className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
                />
              </div>
              <div>
                <label htmlFor="services" className="block mb-2">Serviços de Interesse</label>
                <select
                  id="services"
                  className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="website">Website</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Observações</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Solicitar Orçamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bekno-black text-bekno-white py-8 text-center">
        <p className="text-sm text-bekno-gray-light">
          © 2025 BEKNO - Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}
