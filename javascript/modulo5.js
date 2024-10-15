document.getElementById('createButton').addEventListener('click', function() {
    const name = document.getElementById('planetName').value;
    const type = document.getElementById('planetType').value;
    const atmosphere = document.getElementById('atmosphere').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;

    let texturePath = '';

    // Escolhe da textura com base no tipo de planeta
    switch (type) {
        case 'terrestrial':
            texturePath = '../../img/rochoso.jpg';
            break;
        case 'gas_giant':
            texturePath = '../../img/gas.jpg';
            break;
        case 'ice_giant':
            texturePath = '../../img/ice.jpg';
            break;
        case 'super_earth':
            texturePath = '../../img/rochoso.jpg';
            break;
        default:
            texturePath = ''; // Valor padrão se não houver tipo de planeta
    }

    if (name && type && atmosphere && size) {
        const planetDisplay = document.getElementById('planetDisplay');
        planetDisplay.innerHTML = `
            <div class="planet">
                <div class="planet-circle" style="background: url('${texturePath}') no-repeat center / cover, ${color}; background-blend-mode: multiply;">
                    <p style="color: white; text-align: center; margin-top: 35px;">${name}</p>
                </div>
                <div class="planet-info">
                    <h2>${name}</h2>
                    <p>Type: ${type.replace('_', ' ').toUpperCase()}</p>
                    <p>Atmosphere: ${atmosphere}</p>
                    <p>Size: ${size} km</p>
                </div>
            </div>
        `;
    } else {
        alert('Please fill in all fields to create your planet!');
    }
});
