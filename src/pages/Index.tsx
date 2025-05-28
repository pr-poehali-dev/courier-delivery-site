import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [orderData, setOrderData] = useState({
    fromAddress: "",
    toAddress: "",
    phone: "",
  });
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    // Имитация создания заказа
    setTimeout(() => setOrderSubmitted(false), 3000);
  };

  const handleTrackingSearch = () => {
    if (trackingNumber) {
      alert(`Отслеживание заказа №${trackingNumber}: Заказ в пути`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                БыстроДоставка
              </h1>
            </div>
            <nav className="flex space-x-6">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#tracking"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Отслеживание
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Доставляем быстро и надёжно
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Курьерская доставка по всему городу. Отслеживание в реальном
                времени. Доставка в день заказа.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Icon name="Package" size={20} />
                  Оформить заказ
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Icon name="MapPin" size={20} />
                  Отследить посылку
                </Button>
              </div>
            </div>

            {/* Order Form */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Быстрый заказ</CardTitle>
                <CardDescription>Оформите доставку за 2 минуты</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="from">Откуда забрать</Label>
                    <Input
                      id="from"
                      placeholder="Адрес отправления"
                      value={orderData.fromAddress}
                      onChange={(e) =>
                        setOrderData({
                          ...orderData,
                          fromAddress: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="to">Куда доставить</Label>
                    <Input
                      id="to"
                      placeholder="Адрес доставки"
                      value={orderData.toAddress}
                      onChange={(e) =>
                        setOrderData({
                          ...orderData,
                          toAddress: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={orderData.phone}
                      onChange={(e) =>
                        setOrderData({ ...orderData, phone: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={orderSubmitted}
                  >
                    {orderSubmitted ? (
                      <>
                        <Icon name="CheckCircle" size={20} />
                        Заказ оформлен!
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={20} />
                        Оформить заказ
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section id="tracking" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Отследить заказ
            </h3>
            <p className="text-xl text-gray-600">
              Введите номер заказа для отслеживания
            </p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <div className="flex space-x-2">
                <Input
                  placeholder="Номер заказа"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={handleTrackingSearch}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Icon name="Search" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h3>
            <p className="text-xl text-gray-600">
              Выберите подходящий тариф доставки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Zap"
                  size={48}
                  className="text-orange-500 mx-auto mb-4"
                />
                <CardTitle>Экспресс</CardTitle>
                <CardDescription>Доставка в течение 2 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    от 300₽
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Доставка за 2 часа</li>
                    <li>• SMS уведомления</li>
                    <li>• Приоритетная обработка</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader className="text-center">
                <Icon
                  name="Clock"
                  size={48}
                  className="text-blue-500 mx-auto mb-4"
                />
                <CardTitle>Стандарт</CardTitle>
                <CardDescription>Доставка в течение дня</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    от 150₽
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Доставка в день заказа</li>
                    <li>• Отслеживание онлайн</li>
                    <li>• Звонок перед доставкой</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Calendar"
                  size={48}
                  className="text-green-500 mx-auto mb-4"
                />
                <CardTitle>Эконом</CardTitle>
                <CardDescription>Доставка на следующий день</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    от 99₽
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Доставка на следующий день</li>
                    <li>• Базовое отслеживание</li>
                    <li>• Выгодная цена</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Свяжитесь с нами
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@bistro-delivery.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Clock" size={32} className="text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Режим работы</h4>
              <p className="text-gray-600">24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={24} />
              <span className="text-lg font-semibold">БыстроДоставка</span>
            </div>
            <p className="text-gray-400">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
