const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

router.post('/', auth, async (req, res) => {
  const { activityId } = req.body;

  if (!activityId) {
    return res.status(400).json({ message: 'Activity ID is required' });
  }

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    const existingBooking = await Booking.findOne({
      user: req.user.userId,
      activity: activityId
    });

    if (existingBooking) {
      return res.status(400).json({ message: 'Activity already booked' });
    }

    const booking = new Booking({
      user: req.user.userId,
      activity: activityId
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/my-bookings', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId })
      .populate('activity')
      .sort({ bookedAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:bookingId', auth, async (req, res) => {
  const { bookingId } = req.params;

  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to cancel this booking' });
    }

    await Booking.deleteOne({ _id: bookingId });
    res.json({ message: 'Booking canceled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;