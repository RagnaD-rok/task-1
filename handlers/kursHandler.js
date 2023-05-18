const Kurs = require("../pkg/akademija/kursSchema");

exports.getAll = async (req, res) => {
    try {
        const Kursevi = await Kurs.find();

        res.status(200).json({
            status: "success",
            data: {
                Kursevi,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getOne = async (req, res) => {
    try {
        const kurs = await Kurs.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                kurs,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

exports.update = async (req, res) => {
    try {
        const kurs = await Kurs.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: {
                kurs,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
            });
        }
    };

    exports.delete = async(req, res) => {
        try {
            await Kurs.findByIdAndDelete(req.params.id);

            res.status(204).json({
                status: "success",
                data: null,
              });
            } catch (err) {
              res.status(404).json({
                status: "fail",
                message: err,
              });
            }
        };
    
        exports.create = async(req, res) => {
            try{
                const novKurs = await Kurs.create(req.body);
                res.status(201).json({
                    status: "success",
                    data: {
                      Kurs: novKurs,
                    },
                  });
                } catch (err) {
                  res.status(404).json({
                    status: "fail",
                    message: err,
                  });
            }
        };
