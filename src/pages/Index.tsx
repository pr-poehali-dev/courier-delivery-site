import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import OrderForm from "@/components/forms/OrderForm";
import { useTracking } from "@/hooks/useTracking";
import { servicePlans, contactInfo } from "@/constants/services";

const Index = () => {
  const { trackingNumber, setTrackingNumber, handleTrackingSearch } =
    useTracking();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />

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
            <OrderForm />
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
            {servicePlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-lg transition-shadow">
                <div className="text-center p-6">
                  <Icon
                    name={plan.icon}
                    size={48}
                    className={`${plan.color} mx-auto mb-4`}
                  />
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-gray-900 mb-4">
                    {plan.price}
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
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
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex flex-col items-center">
                <Icon
                  name={contact.icon}
                  size={32}
                  className="text-blue-600 mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">{contact.title}</h4>
                <p className="text-gray-600">{contact.value}</p>
              </div>
            ))}
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
