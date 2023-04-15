import aboutInfo from "../models/aboutInfoModel.js";
import AboutUs from "../models/aboutInfoModel.js";

export const getMaps = async (req, res) => {
  try {
    const aboutUsData = await AboutUs.find({});

    if (!aboutUsData) {
      return res.status(404).send({ msg: `No ${id} link found` });
    }
    res.send(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getMap = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: `No ${id} link found` });
    }
    res.send(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const addMap = async (req, res) => {
  try {
    const aboutUsData = await AboutUs(req.body);
    await aboutUsData.save();
    res.send({ message: aboutUsData });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updateMap = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutUsData = await AboutUs.findOne({_id: id});

    if (!aboutInfo) {
      return res.status(404).json({ msg: "Map not found" });
    }
    aboutUsData.set( req.body);
    await aboutUsData.save();
    res.send({ msg: "Map updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deleteMap = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOneAndDelete({_id: id});
   
    if (!aboutUsData) {
      return res.status(404).send({ msg: "Map not found" });
    }
   
    res.json({ msg: "Map deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
