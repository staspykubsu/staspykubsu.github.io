document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const serviceTypeRadios = document.querySelectorAll(
        "input[name='service-type']"
    );
    const optionsContainer = document.getElementById("options-container");
    const propertiesContainer = document.getElementById("properties-container");
    const totalPriceElement = document.getElementById("total-price");

    const prices = {
        family: 750,
        standard: 500,
        vip: 1000
    };

    const options = {
        family: ["Детская площадка", "Семейный пакет"],
        vip: ["Ужин в ресторане", "Бесплатный напиток"]
    };

    const properties = {
        family: ["Доступ к VIP-зоне"]
    };

    function updatePrice() {
        const quantity = parseInt(quantityInput.value) || 0;
        const selectedType = document.querySelector(
            "input[name='service-type']:checked"
        ).value;

        // Если quantity равно 0, просто обнуляем цену и выходим
        if (quantity === 0) {
            totalPriceElement.textContent = 0;
            return;
        }

        let price = prices[selectedType] * quantity;

        if (selectedType === "vip") {
            const selectedOption = optionsContainer.querySelector("select")?.value;
            if (selectedOption) {
                price += (
                    selectedOption === "Ужин в ресторане" ? 200 :
                    100
                );
            }
        }

        if (selectedType === "family") {
            const checkbox = propertiesContainer.querySelector(
                "input[type='checkbox']"
            );
            if (checkbox && checkbox.checked) {
                price += 300;
            }
        }

        totalPriceElement.textContent = price;
    }

    function handleServiceTypeChange() {
        const selectedType = document.querySelector(
            "input[name='service-type']:checked"
        ).value;
        optionsContainer.innerHTML = "";
        propertiesContainer.innerHTML = "";

        if (selectedType === "vip") {
            const select = document.createElement("select");
            options[selectedType].forEach(function (option) {
                const opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                select.appendChild(opt);
            });
            select.addEventListener("change", updatePrice);
            optionsContainer.appendChild(select);
        } else if (selectedType === "family") {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "vip-access";
            checkbox.addEventListener("change", updatePrice);
            const label = document.createElement("label");
            label.textContent = "Доступ к VIP-зоне";
            label.htmlFor = "vip-access";
            propertiesContainer.appendChild(checkbox);
            propertiesContainer.appendChild(label);
        }

        updatePrice();
    }

    quantityInput.addEventListener("input", updatePrice);
    serviceTypeRadios.forEach(function (radio) {
        radio.addEventListener("change", handleServiceTypeChange);
    });

    handleServiceTypeChange(); // Инициализация по умолчанию
});
