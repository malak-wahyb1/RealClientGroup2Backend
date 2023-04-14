import aboutInfo from '../models/aboutInfoModel.js';
import AboutUs from '../models/aboutInfoModel.js'


// export const createLink = async (req, res) => {
//   try {
//     const { platform, link } = req.body;
//     const aboutUsData = await AboutUs.create(req.body);
//     aboutUsData[platform] = link;
//     await aboutUsData.save();
//     res.json(aboutUsData);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// };
export const getLink = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOne({_id:id});
    
    if (!aboutUsData) {
      return res.status(404).json({ msg: `No ${id} link found` });
    }
    res.json(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const updateLink = async (req, res) => {
  try {
    const { id } = req.params;
    const  link  = req.body;
    const aboutUsData = await AboutUs.findByIdAndUpdate({_id:id} , {$set:link});
    if (!aboutUsData) {
      return res.status(404).json({ msg: `No ${id} link found` });
    }else{
    res.json({ msg: `${id} link updated successfully` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const getMaps = async (req, res) => {
  try {
    const aboutUsData = await AboutUs.findOne();
    res.json(aboutUsData.maps);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const addMap = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    const aboutUsData = await AboutUs.findOne();
    aboutUsData.maps.push({ name, address, latitude, longitude });
    await aboutUsData.save();
    res.json({ msg: 'Map added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const updateMap = async (req, res) => {
  try {
    const { mapId } = req.params;
    const { name, address, latitude, longitude } = req.body;
    const aboutUsData = await AboutUs.findOne();
    const mapToUpdate = aboutUsData.maps.id(mapId);
    if (!mapToUpdate) {
      return res.status(404).json({ msg: 'Map not found' });
    }
    mapToUpdate.set({ name, address, latitude, longitude });
    await aboutUsData.save();
    res.json({ msg: 'Map updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const deleteMap = async (req, res) => {
  try {
    const { mapId } = req.params;
    const aboutUsData = await AboutUs.findOne();
    const mapToDelete = aboutUsData.maps.id(mapId);
    if (!mapToDelete) {
      return res.status(404).json({ msg: 'Map not found' });
    }
    mapToDelete.remove();
    await aboutUsData.save();
    res.json({ msg: 'Map deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

