import { Grid } from "@mui/material";
import React from "react";
import style from "./styles/PermaLinkComponent.module.scss";
import Icon from "@mui/material/Icon";

function PermaLinkComponent() {
  function leftComponent() {
    return (
      <Grid item xs={6}>
        <div className={style.permaLinkContainer}>
          <div className={style.preContainer}>
            <Icon>keyboard_arrow_left_icon</Icon>
          </div>
          <div className={style.permaLinkContentContainer}>
            <div className={style.permaLinkImageContainer}>
              <img
                src="https://files.hacocms.com/65/media/86/2637/E6B0B8E381ADE3818DE38299E6A798E794BBE5838F.png"
                alt=""
              />
            </div>
            <div className={style.permaLinkTitle}>
              なんと、久しぶりに大吉ではないものを引き当ててしまいました
            </div>
          </div>
        </div>
      </Grid>
    );
  }

  function rightComponent() {
    return (
      <Grid item xs={6}>
        <div className={style.permaLinkContainer}>
          <div className={style.permaLinkContentContainer}>
            <div className={style.permaLinkImageContainer}>
              <img
                src="https://files.hacocms.com/65/media/86/2637/E6B0B8E381ADE3818DE38299E6A798E794BBE5838F.png"
                alt=""
              />
            </div>
            <div className={style.permaLinkTitle}>
              なんと、久しぶりに大吉ではないものを引き当ててしまいました
            </div>
          </div>
          <div className={style.preContainer}>
            <Icon>keyboard_arrow_right_icon</Icon>
          </div>
        </div>
      </Grid>
    );
  }

  return (
    <div>
      <Grid container spacing={0} py={2}>
        {leftComponent()}
        {rightComponent()}
      </Grid>
    </div>
  );
}

export default PermaLinkComponent;
