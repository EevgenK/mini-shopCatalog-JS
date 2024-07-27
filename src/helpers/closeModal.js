function closeModal(e) {
  if (e.key === 'Escape' || e.target.classList.contains('modal-close-btn')) {
    this.close();
  }
}

export { closeModal };
