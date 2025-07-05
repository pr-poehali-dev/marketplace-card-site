import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-turquoise/10 to-oceanblue/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="ShoppingCart" className="text-coral" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">CardPro</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-coral transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-coral transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-coral transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-gradient-to-r from-coral to-turquoise text-white hover:scale-105 transition-transform">
              Заказать консультацию
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-coral via-turquoise to-oceanblue bg-clip-text text-transparent">
              Превращаем товары в бестселлеры
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Создаем и оптимизируем карточки товаров для маркетплейсов.
              Увеличиваем продажи на 300% за 30 дней.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-coral to-turquoise text-white hover:scale-105 transition-transform text-lg px-8 py-6"
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать продавать
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-coral text-coral hover:bg-coral hover:text-white transition-colors text-lg px-8 py-6"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "300+", label: "Успешных проектов", icon: "Trophy" },
              { number: "150%", label: "Рост продаж", icon: "TrendingUp" },
              { number: "24/7", label: "Поддержка", icon: "Clock" },
              { number: "99%", label: "Довольных клиентов", icon: "Heart" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-coral to-turquoise rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={stat.icon} className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">
              Наши услуги
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по созданию и оптимизации карточек товаров
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Создание карточек",
                description:
                  "Разработка продающих описаний, подбор ключевых слов, создание привлекательного контента",
                icon: "FileText",
                color: "from-coral to-pink-400",
              },
              {
                title: "Оптимизация SEO",
                description:
                  "Повышение позиций в поиске маркетплейсов, анализ конкурентов, подбор запросов",
                icon: "Search",
                color: "from-turquoise to-blue-400",
              },
              {
                title: "Аналитика продаж",
                description:
                  "Отслеживание конверсий, A/B тестирование, детальная отчетность по эффективности",
                icon: "BarChart3",
                color: "from-oceanblue to-purple-400",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      name={service.icon}
                      className="text-white"
                      size={28}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 px-4 bg-gradient-to-r from-coral/5 via-turquoise/5 to-oceanblue/5"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">Портфолио</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры наших работ и достигнутых результатов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white/90 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-coral/20 to-turquoise/20 relative overflow-hidden">
                <img
                  src="/img/3fe61b7e-0944-4a66-ba3c-3ebdacbf3145.jpg"
                  alt="Пример карточки товара"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Интернет-магазин электроники
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Увеличение продаж на 250% за 2 месяца
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-coral">+250%</div>
                      <div className="text-sm text-gray-600">Продажи</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-turquoise">
                        +180%
                      </div>
                      <div className="text-sm text-gray-600">Трафик</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-coral text-coral hover:bg-coral hover:text-white"
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white/90 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-turquoise/20 to-oceanblue/20 relative overflow-hidden">
                <img
                  src="/img/0d028852-5049-423d-a76b-fb2eb77357b1.jpg"
                  alt="Команда специалистов"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Бренд спортивной одежды
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Вывод в ТОП-3 по категории за 45 дней
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-turquoise">
                        ТОП-3
                      </div>
                      <div className="text-sm text-gray-600">Позиция</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-oceanblue">
                        +320%
                      </div>
                      <div className="text-sm text-gray-600">Конверсия</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">
              Свяжитесь с нами
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы увеличить продажи? Оставьте заявку и получите бесплатную
              консультацию
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Бесплатная консультация
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Заполните форму и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="border-gray-300 focus:border-coral focus:ring-coral"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Телефон
                    </label>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      className="border-gray-300 focus:border-coral focus:ring-coral"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email
                  </label>
                  <Input
                    placeholder="your@email.com"
                    className="border-gray-300 focus:border-coral focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    className="border-gray-300 focus:border-coral focus:ring-coral min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-coral to-turquoise text-white hover:scale-105 transition-transform text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="ShoppingCart" className="text-coral" size={32} />
                <h4 className="text-xl font-bold">CardPro</h4>
              </div>
              <p className="text-gray-400">
                Профессиональные услуги по созданию и оптимизации карточек
                товаров для маркетплейсов.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Создание карточек</li>
                <li>SEO оптимизация</li>
                <li>Аналитика продаж</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@cardpro.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Соцсети</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-coral transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-coral transition-colors"
                >
                  <Icon name="Linkedin" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-coral transition-colors"
                >
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CardPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
