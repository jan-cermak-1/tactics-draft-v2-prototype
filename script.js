// Data Store
const STORAGE_KEY = 'tactics-data';

// Initial sample data
const initialTactics = [
  {
    id: 1,
    name: 'AAAA',
    suggestedIndustry: '',
    objectives: 3,
    lastEditedBy: 'Jan Čermák',
    lastEditedDate: '6 Jan 2026, 16:05',
    active: true,
    hasDraft: false,
    content: '<p>Sample content for AAAA tactic.</p>',
    bestPractices: [
      { id: 1, text: 'First best practice for AAAA' },
      { id: 2, text: 'Second best practice' }
    ],
    draft: null
  },
  {
    id: 2,
    name: 'AAhojf oj',
    suggestedIndustry: '',
    objectives: 0,
    lastEditedBy: 'Šimon Valenta',
    lastEditedDate: '26 Nov 2025, 12:41',
    active: false,
    hasDraft: false,
    content: '<p>Content for AAhojf oj.</p>',
    bestPractices: [],
    draft: null
  },
  {
    id: 3,
    name: 'Activity log track very very very very very very veyve ryve ryve VERY long name',
    suggestedIndustry: '',
    objectives: 2,
    lastEditedBy: 'Jan Čermák',
    lastEditedDate: '24 Nov 2025, 13:26',
    active: true,
    hasDraft: false,
    content: `<p>sgfdgsdfg sdfg dsfg dfs gdsf gsdf</p>
<table class="content-table">
  <tbody>
    <tr><td>Test</td><td>CCC</td><td>DDD</td></tr>
    <tr><td>SSSS</td><td>AAA</td><td>WWWWW</td></tr>
    <tr><td>CCCC</td><td>AAA</td><td>BBBB</td></tr>
  </tbody>
</table>
<p>sfsdfsadfsdf sf fd gsdfg</p>
<p>sdfgdsf gdsfg</p>
<div class="best-practices-widget">
  <div class="widget-drag-handle">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <circle cx="2" cy="2" r="1" fill="currentColor"/>
      <circle cx="6" cy="2" r="1" fill="currentColor"/>
      <circle cx="2" cy="7" r="1" fill="currentColor"/>
      <circle cx="6" cy="7" r="1" fill="currentColor"/>
      <circle cx="2" cy="12" r="1" fill="currentColor"/>
      <circle cx="6" cy="12" r="1" fill="currentColor"/>
    </svg>
  </div>
  <span class="widget-text">Best practices widget</span>
  <button class="widget-delete">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 5h10M6 5V3h4v2M5 5v8h6V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>
<p>dfs sdfgdsfg dsf gdfs gdsfg</p>`,
    bestPractices: [
      { id: 1, text: 'steping practices best best je to test a je best a hle na to uvidime jak to tu bude vypadat je to best best best' },
      { id: 2, text: 'bbbbb' },
      { id: 3, text: 'aaa' },
      { id: 4, text: 'bbbb' },
      { id: 5, text: 'cccc' },
      { id: 6, text: 'ddd' },
      { id: 7, text: 'eee' }
    ],
    draft: null
  },
  {
    id: 4,
    name: 'ahmadj testsds',
    suggestedIndustry: '',
    objectives: 0,
    lastEditedBy: 'Joao Ahmad',
    lastEditedDate: '29 Jul 2025, 08:01',
    active: false,
    hasDraft: false,
    content: '<p>Content for ahmadj testsds.</p>',
    bestPractices: [],
    draft: null
  },
  {
    id: 5,
    name: 'all scripts',
    suggestedIndustry: '',
    objectives: 1,
    lastEditedBy: 'Anshuman Singh',
    lastEditedDate: '6 Oct 2025, 19:12',
    active: true,
    hasDraft: false,
    content: '<p>Content for all scripts.</p>',
    bestPractices: [
      { id: 1, text: 'Script best practice' }
    ],
    draft: null
  },
  {
    id: 6,
    name: 'Boost Feature Adoption via In-App Nudges',
    suggestedIndustry: '',
    objectives: 0,
    lastEditedBy: 'Jan Čermák',
    lastEditedDate: '4 Aug 2025, 13:25',
    active: false,
    hasDraft: false,
    content: '<p>Content for Boost Feature Adoption.</p>',
    bestPractices: [],
    draft: null
  },
  {
    id: 7,
    name: 'Collaborate with influencers or creators',
    suggestedIndustry: '',
    objectives: 2,
    lastEditedBy: 'Mehdi Ghazouan',
    lastEditedDate: '29 May 2025, 09:25',
    active: true,
    hasDraft: false,
    content: '<p>Content for Collaborate with influencers.</p>',
    bestPractices: [
      { id: 1, text: 'Find relevant influencers' },
      { id: 2, text: 'Create collaboration strategy' }
    ],
    draft: null
  },
  {
    id: 8,
    name: 'Connect all owned social accounts (IG, TikTok, FB, X, LinkedIn, YouTube, etc.)',
    suggestedIndustry: '',
    objectives: 2,
    lastEditedBy: 'Jan Čermák',
    lastEditedDate: '2 Jun 2025, 12:13',
    active: true,
    hasDraft: false,
    content: '<p>Content for Connect social accounts.</p>',
    bestPractices: [
      { id: 1, text: 'Link all accounts' },
      { id: 2, text: 'Verify connections' }
    ],
    draft: null
  },
  {
    id: 9,
    name: 'Content lab',
    suggestedIndustry: '',
    objectives: 1,
    lastEditedBy: 'Filip Zavadil',
    lastEditedDate: '10 Nov 2025, 14:06',
    active: false,
    hasDraft: false,
    content: '<p>Content for Content lab.</p>',
    bestPractices: [
      { id: 1, text: 'Lab practice' }
    ],
    draft: null
  },
  {
    id: 10,
    name: 'Create first content labels based on your content strategy (e.g., Campaigns, Themes, Content Types)',
    suggestedIndustry: '',
    objectives: 0,
    lastEditedBy: 'Filip Zavadil',
    lastEditedDate: '29 May 2025, 08:06',
    active: true,
    hasDraft: false,
    content: '<p>Content for Create first content labels.</p>',
    bestPractices: [],
    draft: null
  }
];

// State
let tactics = [];
let currentTacticId = null;
let originalContent = null;
let originalBestPractices = null;
let hasUnsavedChanges = false;
let saveTimeout = null;

// DOM Elements
const tacticsTableBody = document.getElementById('tactics-tbody');
const modal = document.getElementById('tactic-modal');
const modalTitle = document.getElementById('modal-title');
const editorContent = document.getElementById('editor-content');
const practicesList = document.getElementById('practices-list');
const saveStatus = document.getElementById('save-status');
const activeToggle = document.getElementById('active-toggle');
const previewToggle = document.getElementById('preview-toggle');
const moreMenuBtn = document.getElementById('more-menu-btn');
const moreMenu = document.getElementById('more-menu');
const modalDraftBadge = document.getElementById('modal-draft-badge');

// Initialize
function init() {
  loadData();
  renderTable();
  setupEventListeners();
}

// Load data from localStorage or use initial data
function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    tactics = JSON.parse(stored);
  } else {
    tactics = initialTactics;
    saveData();
  }
}

// Save data to localStorage
function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tactics));
}

// Render tactics table
function renderTable() {
  tacticsTableBody.innerHTML = tactics.map(tactic => `
    <tr data-id="${tactic.id}" class="${tactic.active ? '' : 'row-inactive'}">
      <td class="col-name">
        <a href="#" class="tactic-name">${escapeHtml(tactic.name)}</a>
      </td>
      <td class="col-industry">${escapeHtml(tactic.suggestedIndustry)}</td>
      <td class="col-objectives" style="text-align: center;">${tactic.objectives}</td>
      <td class="col-edited">
        <div class="edited-info">
          <span class="edited-name">${escapeHtml(tactic.lastEditedBy)}</span>
          <span class="edited-date">${escapeHtml(tactic.lastEditedDate)}</span>
        </div>
      </td>
      <td class="col-active" data-tactic-id="${tactic.id}" data-active="${tactic.active}">
        <label class="toggle" onclick="event.stopPropagation();">
          <input type="checkbox" ${tactic.active ? 'checked' : ''} onchange="toggleActive(${tactic.id}, this.checked)">
          <span class="toggle-slider"></span>
        </label>
      </td>
      <td class="col-draft" style="text-align: center;">
        <span class="badge badge-draft ${tactic.hasDraft ? '' : 'badge-hidden'}">Draft</span>
      </td>
    </tr>
  `).join('');
}

// Toggle active status
function toggleActive(id, active) {
  const tactic = tactics.find(t => t.id === id);
  if (tactic) {
    tactic.active = active;
    saveData();
    
    // Update row opacity
    const row = document.querySelector(`tr[data-id="${id}"]`);
    if (row) {
      row.classList.toggle('row-inactive', !active);
    }
    
    // Update modal toggle if this tactic is open
    if (currentTacticId === id) {
      activeToggle.checked = active;
    }
  }
}

// Open tactic detail modal
function openTactic(id) {
  const tactic = tactics.find(t => t.id === id);
  if (!tactic) return;
  
  currentTacticId = id;
  hasUnsavedChanges = false;
  
  // Use draft content if available, otherwise published content
  const contentToShow = tactic.draft ? tactic.draft.content : tactic.content;
  const practicesToShow = tactic.draft ? tactic.draft.bestPractices : tactic.bestPractices;
  
  // Store original for comparison
  originalContent = contentToShow;
  originalBestPractices = JSON.stringify(practicesToShow);
  
  // Populate modal
  modalTitle.textContent = tactic.name;
  editorContent.innerHTML = contentToShow;
  
  // Set active toggle
  activeToggle.checked = tactic.active;
  
  // Reset preview toggle
  previewToggle.checked = false;
  
  // Render best practices
  renderBestPractices(practicesToShow);
  
  // Show/hide draft badge and set initial status
  // Also show/hide draft-only menu items
  const draftOnlyItems = document.querySelectorAll('.draft-only');
  if (tactic.hasDraft) {
    modalDraftBadge.classList.remove('badge-hidden');
    saveStatus.textContent = 'Unpublished';
    saveStatus.className = 'save-status';
    // Show draft-only menu items
    draftOnlyItems.forEach(item => item.style.display = '');
  } else {
    modalDraftBadge.classList.add('badge-hidden');
    saveStatus.textContent = 'Published';
    saveStatus.className = 'save-status';
    // Hide draft-only menu items
    draftOnlyItems.forEach(item => item.style.display = 'none');
  }
  
  // Show modal
  modal.classList.add('open');
}

// Close modal
function closeModal() {
  if (hasUnsavedChanges) {
    // Mark as draft
    const tactic = tactics.find(t => t.id === currentTacticId);
    if (tactic) {
      tactic.hasDraft = true;
      tactic.draft = {
        content: editorContent.innerHTML,
        bestPractices: getCurrentBestPractices()
      };
      saveData();
      renderTable();
    }
  }
  
  modal.classList.remove('open');
  currentTacticId = null;
  hasUnsavedChanges = false;
}

// Render best practices list
function renderBestPractices(practices) {
  practicesList.innerHTML = practices.map((practice, index) => `
    <div class="practice-item" data-id="${practice.id}">
      <span class="practice-number">${index + 1}</span>
      <div class="practice-content" contenteditable="true" oninput="handlePracticeEdit()">${escapeHtml(practice.text)}</div>
      <div class="practice-actions">
        <button class="practice-btn" onclick="editPractice(${practice.id})" title="Edit">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.5 2.5l2 2-8 8H3.5v-2l8-8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="practice-btn practice-btn-delete" onclick="deletePractice(${practice.id})" title="Delete">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 5h10M6 5V3h4v2M5 5v8h6V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Get current best practices from DOM
function getCurrentBestPractices() {
  const items = practicesList.querySelectorAll('.practice-item');
  return Array.from(items).map((item, index) => ({
    id: parseInt(item.dataset.id),
    text: item.querySelector('.practice-content').textContent
  }));
}

// Handle content edit
function handleContentEdit() {
  markAsDraft();
}

// Handle practice edit
function handlePracticeEdit() {
  markAsDraft();
}

// Mark as draft and trigger auto-save
function markAsDraft() {
  hasUnsavedChanges = true;
  
  // Show saving status
  saveStatus.textContent = 'Saving...';
  saveStatus.className = 'save-status';
  
  // Debounce save
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    autosaveDraft();
  }, 500);
}

// Auto-save draft
function autosaveDraft() {
  const tactic = tactics.find(t => t.id === currentTacticId);
  if (!tactic) return;
  
  tactic.hasDraft = true;
  tactic.draft = {
    content: editorContent.innerHTML,
    bestPractices: getCurrentBestPractices()
  };
  
  saveData();
  renderTable();
  
  // Show draft badge
  modalDraftBadge.classList.remove('badge-hidden');
  
  // Show draft-only menu items
  const draftOnlyItems = document.querySelectorAll('.draft-only');
  draftOnlyItems.forEach(item => item.style.display = '');
  
  // Show saved status (not published since it's a draft)
  saveStatus.textContent = 'Saved (not published)';
  saveStatus.className = 'save-status';
}

// Publish tactic
function publishTactic() {
  const tactic = tactics.find(t => t.id === currentTacticId);
  if (!tactic) return;
  
  // Show publishing status
  saveStatus.textContent = 'Publishing...';
  saveStatus.className = 'save-status';
  
  // Simulate API delay
  setTimeout(() => {
    // Merge draft into published version
    if (tactic.draft) {
      tactic.content = tactic.draft.content;
      tactic.bestPractices = tactic.draft.bestPractices;
    } else {
      // Save current content as published
      tactic.content = editorContent.innerHTML;
      tactic.bestPractices = getCurrentBestPractices();
    }
    
    // Clear draft
    tactic.hasDraft = false;
    tactic.draft = null;
    
    // Update edit info
    tactic.lastEditedBy = 'Jan Čermák';
    tactic.lastEditedDate = formatDate(new Date());
    
    // Update original content to current (so further edits will create new draft)
    originalContent = tactic.content;
    originalBestPractices = JSON.stringify(tactic.bestPractices);
    
    hasUnsavedChanges = false;
    
    saveData();
    renderTable();
    
    // Hide draft badge
    modalDraftBadge.classList.add('badge-hidden');
    
    // Show published status (stays visible)
    saveStatus.textContent = 'Published';
    saveStatus.className = 'save-status';
  }, 500);
}

// Add best practice
function addBestPractice() {
  const tactic = tactics.find(t => t.id === currentTacticId);
  if (!tactic) return;
  
  const currentPractices = getCurrentBestPractices();
  const newId = Math.max(0, ...currentPractices.map(p => p.id)) + 1;
  
  currentPractices.push({
    id: newId,
    text: 'New best practice'
  });
  
  renderBestPractices(currentPractices);
  markAsDraft();
  
  // Focus on new practice
  const newPractice = practicesList.querySelector(`.practice-item[data-id="${newId}"] .practice-content`);
  if (newPractice) {
    newPractice.focus();
    // Select all text
    const range = document.createRange();
    range.selectNodeContents(newPractice);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

// Edit practice (focus on it)
function editPractice(id) {
  const item = practicesList.querySelector(`.practice-item[data-id="${id}"] .practice-content`);
  if (item) {
    item.focus();
  }
}

// Delete practice
function deletePractice(id) {
  const currentPractices = getCurrentBestPractices().filter(p => p.id !== id);
  renderBestPractices(currentPractices);
  markAsDraft();
}

// Show snackbar
function showSnackbar(message) {
  const snackbar = document.getElementById('snackbar');
  snackbar.textContent = message;
  snackbar.classList.add('show');
  
  setTimeout(() => {
    snackbar.classList.remove('show');
  }, 3000);
}

// Show confirmation modal
let confirmCallback = null;
function showConfirmModal(title, message, onConfirm) {
  const confirmModal = document.getElementById('confirm-modal');
  document.getElementById('confirm-modal-title').textContent = title;
  document.getElementById('confirm-modal-message').textContent = message;
  confirmCallback = onConfirm;
  confirmModal.classList.add('open');
}

function hideConfirmModal() {
  const confirmModal = document.getElementById('confirm-modal');
  confirmModal.classList.remove('open');
  confirmCallback = null;
}

// Duplicate tactic
function duplicateTactic() {
  const tactic = tactics.find(t => t.id === currentTacticId);
  if (!tactic) return;
  
  const newId = Math.max(...tactics.map(t => t.id)) + 1;
  const newTactic = {
    ...JSON.parse(JSON.stringify(tactic)),
    id: newId,
    name: `${tactic.name} (copy)`,
    lastEditedBy: 'Jan Čermák',
    lastEditedDate: formatDate(new Date()),
    hasDraft: false,
    draft: null
  };
  
  tactics.push(newTactic);
  saveData();
  renderTable();
  
  // Close dropdown
  moreMenu.classList.remove('open');
  
  // Show snackbar
  showSnackbar('Tactic duplicated successfully!');
}

// Save draft as new tactic
function saveDraftAsNew() {
  const tactic = tactics.find(t => t.id === currentTacticId);
  if (!tactic) return;
  
  // Get current content (either draft or current editor content)
  const content = tactic.draft ? tactic.draft.content : editorContent.innerHTML;
  const bestPractices = tactic.draft ? tactic.draft.bestPractices : getCurrentBestPractices();
  
  const newId = Math.max(...tactics.map(t => t.id)) + 1;
  const newTactic = {
    id: newId,
    name: `${tactic.name} (copy)`,
    suggestedIndustry: tactic.suggestedIndustry,
    objectives: tactic.objectives,
    lastEditedBy: 'Jan Čermák',
    lastEditedDate: formatDate(new Date()),
    content: content,
    bestPractices: bestPractices,
    active: false,  // New tactic is inactive
    hasDraft: false,
    draft: null
  };
  
  tactics.push(newTactic);
  saveData();
  renderTable();
  
  // Close dropdown
  moreMenu.classList.remove('open');
  
  // Show snackbar
  showSnackbar('Draft saved as new tactic!');
}

// Remove tactic
function removeTactic() {
  moreMenu.classList.remove('open');
  
  showConfirmModal(
    'Remove tactic',
    'Are you sure you want to remove this tactic? This action cannot be undone.',
    () => {
      tactics = tactics.filter(t => t.id !== currentTacticId);
      saveData();
      renderTable();
      
      // Close modal
      modal.classList.remove('open');
      currentTacticId = null;
      hideConfirmModal();
      
      showSnackbar('Tactic removed successfully!');
    }
  );
}

// Discard draft
function discardDraft() {
  const tactic = tactics.find(t => t.id === currentTacticId);
  if (!tactic) return;
  
  if (!tactic.hasDraft) {
    showSnackbar('No draft to discard.');
    moreMenu.classList.remove('open');
    return;
  }
  
  moreMenu.classList.remove('open');
  
  showConfirmModal(
    'Discard draft',
    'Are you sure you want to discard the draft? All unsaved changes will be lost.',
    () => {
      hideConfirmModal();
      performDiscardDraft();
    }
  );
}

function performDiscardDraft() {
  const tactic = tactics.find(t => t.id === currentTacticId);
  if (!tactic) return;
  
  // Restore published version
  tactic.hasDraft = false;
  tactic.draft = null;
  hasUnsavedChanges = false;
  
  saveData();
  renderTable();
  
  // Reload modal content with published version
  editorContent.innerHTML = tactic.content;
  renderBestPractices(tactic.bestPractices);
  
  // Update original content
  originalContent = tactic.content;
  originalBestPractices = JSON.stringify(tactic.bestPractices);
  
  // Hide draft badge
  modalDraftBadge.classList.add('badge-hidden');
  
  // Show draft discarded status
  saveStatus.textContent = 'Draft discarded';
  saveStatus.className = 'save-status';
  
  // Change to Published after delay
  setTimeout(() => {
    saveStatus.textContent = 'Published';
    saveStatus.className = 'save-status';
  }, 2000);
  
  moreMenu.classList.remove('open');
}

// Setup event listeners
function setupEventListeners() {
  // Table row click
  tacticsTableBody.addEventListener('click', (e) => {
    // Check if clicked on toggle cell (but not on the toggle itself)
    const toggleCell = e.target.closest('.col-active');
    if (toggleCell && !e.target.closest('.toggle')) {
      e.stopPropagation();
      const checkbox = toggleCell.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        const id = parseInt(toggleCell.dataset.tacticId);
        toggleActive(id, checkbox.checked);
      }
      return;
    }
    
    // Check if clicked on toggle label - don't open modal
    if (e.target.closest('.toggle')) {
      return;
    }
    
    // Open tactic detail
    const row = e.target.closest('tr');
    if (row) {
      const id = parseInt(row.dataset.id);
      openTactic(id);
    }
  });
  
  // Close modal
  document.getElementById('close-modal').addEventListener('click', closeModal);
  
  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
  
  // Editor content change
  editorContent.addEventListener('input', handleContentEdit);
  
  // Active toggle in modal
  activeToggle.addEventListener('change', (e) => {
    const active = e.target.checked;
    toggleActive(currentTacticId, active);
  });
  
  // Preview toggle
  previewToggle.addEventListener('change', (e) => {
    // Toggle preview mode
  });
  
  // More menu toggle
  moreMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    moreMenu.classList.toggle('open');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
      moreMenu.classList.remove('open');
    }
  });
  
  // Dropdown actions
  document.getElementById('duplicate-tactic').addEventListener('click', duplicateTactic);
  document.getElementById('remove-tactic').addEventListener('click', removeTactic);
  document.getElementById('discard-draft').addEventListener('click', discardDraft);
  document.getElementById('save-draft-as-new').addEventListener('click', saveDraftAsNew);
  
  // Confirm modal buttons
  document.getElementById('confirm-cancel').addEventListener('click', hideConfirmModal);
  document.getElementById('confirm-ok').addEventListener('click', () => {
    if (confirmCallback) {
      confirmCallback();
    }
  });
  
  // Publish button
  document.getElementById('publish-btn').addEventListener('click', publishTactic);
  
  // Add best practice
  document.getElementById('add-practice-btn').addEventListener('click', addBestPractice);
}

// Utility: Escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Utility: Format date
function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day} ${month} ${year}, ${hours}:${minutes}`;
}

// Make functions available globally for inline handlers
window.toggleActive = toggleActive;
window.handlePracticeEdit = handlePracticeEdit;
window.editPractice = editPractice;
window.deletePractice = deletePractice;

// Initialize on load
document.addEventListener('DOMContentLoaded', init);

