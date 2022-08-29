import { styled } from "@mui/material/styles";
import { DialogContent, IconButton, DialogActions, Chip } from "@mui/material";

export const StyledDialogContent = styled(DialogContent)(`
  width: 500px;
  heigh: 160px;
  margin: 8px 0;
  padding-top: 8px !important;
`);

export const StyledDialogActions = styled(DialogActions)(`
  padding: 0 20px 14px;
`);

export const CloseIconButton = styled(IconButton)(`
  position: absolute;
  right: 16px;
  top: 8px;
`);

export const ChipsWrapper = styled("div")(`
  margin-top: 12px;
`);

export const StyledChip = styled(Chip)(`
  margin-right: 6px;
  margin-bottom: 8px;
`);
