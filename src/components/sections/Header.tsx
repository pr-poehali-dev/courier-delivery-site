import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={32} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">БыстроДоставка</h1>
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
  );
};

export default Header;
