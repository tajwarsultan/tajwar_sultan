/** Readdy-generated project thumbnails (same URLs as reference site). */
function readdyProjectImage(query, seq) {
  const params = new URLSearchParams({
    query,
    width: '500',
    height: '500',
    seq,
    orientation: 'squarish',
  })
  return `https://readdy.ai/api/search-image?${params.toString()}`
}

export const projectImageUrls = {
  arcadian: readdyProjectImage(
    'Abstract digital security surveillance interface with glowing data streams and geometric patterns representing AI video analytics processing real time threat detection on a dark technological background',
    'proj-arcadian-01'
  ),
  quohr: readdyProjectImage(
    'Modern abstract human resources management concept with flowing interconnected nodes representing employee lifecycle automation on a clean professional gradient background with warm tones',
    'proj-quohr-01'
  ),
  gilgit: readdyProjectImage(
    'Digital platform concept merging mountain landscape silhouettes with connected community network nodes and local business icons in a warm earthy color palette abstract illustration',
    'proj-gilgit-01'
  ),
  intellquery: readdyProjectImage(
    'Abstract artificial intelligence concept with neural network connections document icons and conversational chat bubbles floating in a deep intellectual gradient space with subtle data particles',
    'proj-intellquery-01'
  ),
  cathoven: readdyProjectImage(
    'Modern education technology abstract illustration with assessment scoring charts book icons and AI neural connections on a clean academic themed background with soft gradients',
    'proj-cathoven-01'
  ),
  bbr: readdyProjectImage(
    'Abstract nautical booking platform concept with stylized boat silhouettes water ripples calendar interface elements and soft ocean blue gradients in a modern clean composition',
    'proj-bbr-01'
  ),
  velnix: readdyProjectImage(
    'Cloud native SaaS platform abstract illustration with multi tenant architecture nodes serverless computing symbols and interconnected data streams on a professional gradient background',
    'proj-velnix-01'
  ),
  steripilot: readdyProjectImage(
    'Healthcare technology abstract concept with medical cross symbols sterilization compliance checkmarks and AI powered monitoring interfaces on a clean clinical gradient background',
    'proj-steri-01'
  ),
}
