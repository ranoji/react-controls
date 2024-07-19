const handleBlankAreaClick = () => {
    if (gridRef.current) {
      gridRef.current.api.deselectAll();
      gridRef.current.api.setFocusedCell(0, 'name');
    }
  };

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      onClick={handleBlankAreaClick}
    >
