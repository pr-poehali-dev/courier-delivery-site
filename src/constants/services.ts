import { ServicePlan, ContactInfo } from "@/types";

export const servicePlans: ServicePlan[] = [
  {
    id: "express",
    name: "Экспресс",
    description: "Доставка в течение 2 часов",
    price: "от 300₽",
    icon: "Zap",
    color: "text-orange-500",
    features: [
      "Доставка за 2 часа",
      "SMS уведомления",
      "Приоритетная обработка",
    ],
  },
  {
    id: "standard",
    name: "Стандарт",
    description: "Доставка в течение дня",
    price: "от 150₽",
    icon: "Clock",
    color: "text-blue-500",
    features: [
      "Доставка в день заказа",
      "Отслеживание онлайн",
      "Звонок перед доставкой",
    ],
  },
  {
    id: "economy",
    name: "Эконом",
    description: "Доставка на следующий день",
    price: "от 99₽",
    icon: "Calendar",
    color: "text-green-500",
    features: [
      "Доставка на следующий день",
      "Базовое отслеживание",
      "Выгодная цена",
    ],
  },
];

export const contactInfo: ContactInfo[] = [
  { icon: "Phone", title: "Телефон", value: "+7 (495) 123-45-67" },
  { icon: "Mail", title: "Email", value: "info@bistro-delivery.ru" },
  { icon: "Clock", title: "Режим работы", value: "24/7" },
];
