import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nama_lengkap, alamat_email, kontak } = req.body;

    const url = 'https://kenali-diri.prahwa.net/ujicoba-form';
    const token = '5kXNA82yTNsUpjawbOfpqsOn1nVMgY3LHYl8HHDCe0Q=';

    try {
      const response = await axios.post(url, new URLSearchParams({
        nama_lengkap,
        alamat_email,
        kontak
      }), {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      res.status(response.status).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(error.response ? error.response.status : 500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
