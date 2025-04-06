document.addEventListener('DOMContentLoaded', function() {
  const serviceList = document.querySelector('.service-list ul'); // Target the UL
  const serviceListItems = document.querySelectorAll('.service-list-item');
  const serviceDetailContents = document.querySelectorAll('.service-detail-content');

  if (!serviceList || !serviceListItems.length || !serviceDetailContents.length) {
    return; // Exit if elements aren't found
  }

  function activateService(serviceId) {
    // Deactivate currently active items
    document.querySelector('.service-list-item.active')?.classList.remove('active');
    document.querySelector('.service-detail-content.active')?.classList.add('d-none');
    document.querySelector('.service-detail-content.active')?.classList.remove('active');

    // Activate the new item
    const listItem = document.querySelector(`.service-list-item[data-service-id="${serviceId}"]`);
    const detailContent = document.getElementById(serviceId);

    if (listItem && detailContent) {
      listItem.classList.add('active');
      detailContent.classList.remove('d-none');
      detailContent.classList.add('active');
    }
  }

  serviceListItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      // Add list-active class to parent UL when any item is hovered
      serviceList.classList.add('list-active'); 
      const serviceId = this.getAttribute('data-service-id');
      // Activate the specific service (handles adding/removing .active to items)
      activateService(serviceId);
    });
    
    // Optional: Touchstart for mobile
    item.addEventListener('touchstart', function(event) {
        event.preventDefault(); 
        serviceList.classList.add('list-active'); // Also activate list on touch
        const serviceId = this.getAttribute('data-service-id');
        activateService(serviceId);
    });
  });

  // Remove list-active class when mouse leaves the entire list container
  serviceList.addEventListener('mouseleave', function() {
     serviceList.classList.remove('list-active');
     // When mouse leaves, we want the last hovered item to remain 'active' (black)
     // and others grey, matching the :not(.active) CSS rule.
     // No extra action needed here as CSS handles the appearance based on .active class.
  });

  // Initial state handled by server-side classes.
}); 