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
import { useOrderForm } from "@/hooks/useOrderForm";

const OrderForm = () => {
  const { orderData, orderSubmitted, handleOrderSubmit, updateOrderData } =
    useOrderForm();

  return (
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
              onChange={(e) => updateOrderData("fromAddress", e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="to">Куда доставить</Label>
            <Input
              id="to"
              placeholder="Адрес доставки"
              value={orderData.toAddress}
              onChange={(e) => updateOrderData("toAddress", e.target.value)}
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
              onChange={(e) => updateOrderData("phone", e.target.value)}
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
  );
};

export default OrderForm;
