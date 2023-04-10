
const sellCar = async (req, res, next) => {
    try {
      const { userId, total } = req.body;
      const order = await Order.create({ userId, total });
      const userCar = await Car.findOne({ where: { userId } });
      const products = ProductsInCar.findAll({
        where: { carId: userCar.id },
      });

      const producsToInsert = products.map((product) => ({
        productId: product.productId,
        orderId: order.id,
        qty: product.qty,
        price: product.price,
      }));

      await ProductsInOrder.bulkCreate(producsToInsert);

      await car.update({ total: 0 }, { where: { userId } });

      await ProductsInCar.update(
        { status: "purchased" },
        { where: { carId: userCar.id } }
      );

      await ProductsInCar.destroy({ where: { carId: userCar.id } });
    } catch (error) {
      next(error);
    }
  };