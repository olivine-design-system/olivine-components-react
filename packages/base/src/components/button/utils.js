export function getSharedProps({
  disabled,
  isLoading,
  isSelected,
  type,
  shape,
  size,
}) {
  return {
    $disabled: disabled,
    $isLoading: isLoading,
    $isSelected: isSelected,
    $type: type,
    $shape: shape,
    $size: size,
  }
}
