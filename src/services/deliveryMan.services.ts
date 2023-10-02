import axios from "axios";

const apiURL = "http://localhost:3001/api";

class DeliveryManService {
  async getTakedPackages() {
    try {
      const packages = await axios.get(
        `${apiURL}/delivery-man/taked-packages`,
        {
          withCredentials: true,
        }
      );
      return packages;
    } catch (error) {
      console.error("Error al obtener los paquetes:", error);
      throw error;
    }
  }
  async getTakedPackagesDelivered() {
    try {
      const packages = await axios.get(
        `${apiURL}/delivery-man/taked-packages`,
        {
          withCredentials: true,
        }
      );
      return packages;
    } catch (error) {
      console.error("Error al obtener los paquetes:", error);
      throw error;
    }
  }

  async TakePackage(packagesId: string[]) {
    const packages = await axios.post(
      `${apiURL}/delivery-man/take-packages`,
      packagesId,
      {
        withCredentials: true,
      }
    );
    return packages;
  }

  async UntakePackage(packageId: string) {
    const pack = await axios.delete(
      `${apiURL}/delivery-man/untake-package/${packageId}`,
      {
        withCredentials: true,
      }
    );
    return pack;
  }

}

export default new DeliveryManService();
