import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import CoinTicker from "./widgets/CoinTicker";

const WidgetForm = () => {
  const initialData = {
    coinId: { value: "ethereum", label: "Ethereum" },
    currencyId: { value: "usd", label: "USD" },
    width: 0,
    color: "#ffffff"
  };
  const initialScript =
    '<script src="https://irgendwas.com/br-coin-widget.js"></script>';
  const methods = useForm({
    defaultValues: initialData
  });
  const { control, register, handleSubmit, errors } = methods;

  const [widgetData, setWidgetData] = useState(initialData);
  const [widgetScript, setWidgetScript] = useState(initialScript);

  const onSubmit = data => {
    //console.log(data);
    let widgetWidth = "";
    let widgetColor = "";
    if (parseInt(data.width) !== 0) {
      widgetWidth = `width="${data.width}"`;
    }
    if ("#ffffff" !== data.color) {
      widgetColor = `background-color="${data.color}"`;
    }

    setWidgetScript(
      `<script src="https://irgendwas.com/br-coin-widget.js"></script>
      <div class="br_coin_widget" coin-id="${data.coinId.value}" currency="${
        data.currencyId.value
      }" ${widgetColor} ${widgetWidth}></div>`
    );
    const dataNew = {
      coinId: data.coinId,
      currencyId: data.currencyId,
      width: data.width,
      color: data.color
    };
    setWidgetData(dataNew);
  };

  const options = [
    { value: "bitcoin", label: "Bitcoin" },
    { value: "ethereum", label: "Ethereum" },
    { value: "tether", label: "Tether" },
    { value: "litecoin", label: "Litecoin" },
    { value: "chainlink", label: "Chainlink" },
    { value: "xrp", label: "XRP" }
  ];
  const optionsCurrency = [
    { value: "usd", label: "USD" },
    { value: "eur", label: "Euro" },
    { value: "chf", label: "CHF" },
    { value: "gbp", label: "GBP" }
  ];
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      `
      https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
        widgetData.currencyId.value
      }&ids=${
        widgetData.coinId.value
      }&order=market_cap_desc&per_page=1&page=1&sparkline=false`
    )
      .then(response => response.json())
      .then(data1 => {
        setLoading(false);
        setCoinData(data1[0]);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
        setError("error fetching from coingecko");
      });
  }, [widgetData]);
  return (
    <div className="max-w-screen-2xl px-4 mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border rounded-sm p-2"
          >
            <div className="py-1 mb-2">
              <label htmlFor="coinId">Coin</label>
              <Controller
                name="coinId"
                id="coinId"
                control={control}
                as={Select}
                options={options}
                rules={{ required: true }}
                aria-invalid={errors.coinId ? "true" : "false"}
              />
            </div>
            <div className="py-1 mb-2">
              <label htmlFor="currencyId">Währung</label>
              <Controller
                name="currencyId"
                id="currencyId"
                control={control}
                as={Select}
                options={optionsCurrency}
                rules={{ required: true }}
                aria-invalid={errors.coinId ? "true" : "false"}
              />
              {errors.currencyId && errors.currencyId.type === "required" && (
                <span role="alert">This is required</span>
              )}
            </div>
            <div className="py-1 mb-2">
              <label htmlFor="currencyId">Breite</label>
              <input
                type="text"
                id="width"
                name="width"
                aria-invalid={errors.width ? "true" : "false"}
                ref={register({ required: true })}
              />
              {errors.width && errors.width.type === "required" && (
                <span role="alert">This is required</span>
              )}
            </div>

            <div className="py-1 mb-2">
              <label htmlFor="currencyId">Farbe</label>
              <input
                type="text"
                id="color"
                name="color"
                aria-invalid={errors.color ? "true" : "false"}
                ref={register({ required: true })}
              />
              {errors.color && errors.color.type === "required" && (
                <span role="alert">This is required</span>
              )}
            </div>

            <input type="submit" />
          </form>
        </div>
        <div>
          <div>
            {loading && "Lade..."}
            {!loading && coinData && widgetData && (
              <CoinTicker coin={coinData} widget={widgetData} />
            )}
          </div>
          <div>
            <textarea readOnly value={widgetScript} rows="5" />
            <p className="text-sm text-gray-500">
              Platziere das Widget am gewünschten Ort per Kopieren und Einfügen.
              Du kannst so viele Widgets dieses Typs laden, wie du möchtest,
              lade das Script jedoch nur <strong>EINMAL</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetForm;
