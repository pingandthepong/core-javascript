export function copy(text) {
  return navigator.clipboard.writeText(text);
}

// JS트리구조에 있는 navigator. writeText의 글자를 clipboard에 받아서 적어주는 것(?)
// navigator의 clipboard의
