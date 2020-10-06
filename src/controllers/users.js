class WebUsers {
  get(req, res) {
    return res.send([
      {
        name: 'Default name',
        email: 'Default email',
        company: 'Default company',
      },
    ]);
  }
}

export default WebUsers;
