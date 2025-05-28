export interface OrderData {
  fromAddress: string;
  toAddress: string;
  phone: string;
}

export interface ServicePlan {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
  color: string;
  features: string[];
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}
