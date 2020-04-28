const express = require('express');
const router = express.Router();
const parcels = require('../Parcel');

//Get all Order
router.get('/', (req, res) => res.json(parcels));

//Get particular order
router.get('/:id', (req, res) => {
    const found = parcels.some(parcel => parcel.id === parseInt(req.params.id));

    if (found){
        res.json(parcels.filter(parcel => parcel.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    }
   
});

//Create Order
router.post('/', (req, res) => {
    const newParcel = {
        id: req.body.id,
        item: req.body.id,
        location: req.body.location,
        status: req.body.status,
    };

    if (!newParcel.item || !newParcel.location) {
        return res.status(400).json({ msg: 'PLEASE INCLUDE AN ITEM AND LOCATION'});
    }
    parcels.push(newParcel);
    res.json(parcels);
});

//Cancel Order
router.delete('/:id', (req, res) => {
    const found = parcels.some(parcel => parcel.id === parseInt(req.params.id));

    if (found){{
        res.json({
            msg: 'Order Cancelled',
            parcels: parcels.filter(parcel => parcel.id !== parseInt(req.params.id))
        });
    }
        
    } else {
        res.status(400).json({ msg: `No order with the id of ${req.params.id}`});
    }
   
});

module.exports = router;