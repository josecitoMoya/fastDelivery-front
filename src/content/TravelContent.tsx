import { NextPage } from "next";
import Button from "../common/Button";
import deliveryManServices from "@/services/deliveryMan.services";
import Map from "./Map";
import { LatLngLiteral } from "@googlemaps/google-maps-services-js";

interface Props {
  destination: string;
  id: string;
  client: string;
  quantity_taked: number;
  is_delivered: boolean;
  coords: LatLngLiteral;
}
const TravelContent: NextPage<Props> = ({
  destination,
  id,
  client,
  quantity_taked,
  is_delivered,
  coords,
}) => {
  const handleCancel = () => {
    try {
      deliveryManServices.UntakePackage(id);
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };

  const handleFinish = () => {
    try {
      deliveryManServices.MarkDeliveredPackage(id);
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };

  return (
    <div>
      <div className="img mx-auto">
        <Map coords={coords} />
      </div>
      <div className="info-travel mx-auto ">
        <p>
          <span>Destino:</span> {destination}
        </p>
        <p>
          <span>Numero de paquete:</span> {id}
        </p>
        <p>
          <span>Cantidad de paquetes:</span> {quantity_taked}
        </p>
        <p>
          <span>Recibe:</span> {client}
        </p>
      </div>

      {is_delivered ? (
        <br />
      ) : (
        <>
          {" "}
          <br />
          <Button
            href={"/user/home"}
            bgc="bg-green text-blue"
            position="mx-auto my-5"
            text="finalizar"
            onClick={handleFinish}
            type="button"
          ></Button>{" "}
          <br />
          <Button
            type="button"
            href="/user/get-products"
            bgc="bg-green text-blue"
            position="mx-auto my-5 "
            onClick={handleCancel}
            text="cancelar entrega"
          />
          <br />
        </>
      )}
    </div>
  );
};
export default TravelContent;
